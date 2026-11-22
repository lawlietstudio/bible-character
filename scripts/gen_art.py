#!/usr/bin/env python3
"""Generate card artwork with Codex CLI's built-in image_gen tool.

Usage:
    python scripts/gen_art.py daniel lions        # specific cards (ids are unique across books)
    python scripts/gen_art.py --book ruth --jobs 4  # every card of one book that has no art yet
    python scripts/gen_art.py --all               # every book
    python scripts/gen_art.py --book ruth --force # regenerate

Prompts live in scripts/art_prompts.json:
    { "common": <style shared by every book>, "avoid": ...,
      "books": { "<book id>": { "setting": <period / place look>, "scenes": { "<card id>": <scene> } } } }
Raw PNGs land in art/raw/<book>/<id>.png; run scripts/optimize_art.py afterwards to produce
the web-sized WebP files in assets/art/<book>/.

The codex executable is located via $CODEX_EXE, then PATH, then the Microsoft Store install (WindowsApps).
"""
from __future__ import annotations

import argparse
import glob
import json
import os
import shutil
import subprocess
import sys
import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PROMPTS = json.loads((ROOT / "scripts" / "art_prompts.json").read_text(encoding="utf-8"))
RAW = ROOT / "art" / "raw"
LOGS = ROOT / "art" / "logs"
CODEX_HOME = Path(os.environ.get("CODEX_HOME") or Path.home() / ".codex")
GEN_DIR = CODEX_HOME / "generated_images"
print_lock = threading.Lock()

# card id -> (book id, scene)
SCENES: dict[str, tuple[str, str]] = {}
for _book, _b in PROMPTS["books"].items():
    for _id, _scene in _b["scenes"].items():
        if _id in SCENES:
            sys.exit(f"duplicate card id {_id!r} in books {SCENES[_id][0]} and {_book}")
        SCENES[_id] = (_book, _scene)


def log(msg: str) -> None:
    with print_lock:
        print(msg, flush=True)


def find_codex() -> str:
    if os.environ.get("CODEX_EXE"):
        return os.environ["CODEX_EXE"]
    found = shutil.which("codex")
    if found:
        return found
    hits = sorted(glob.glob(r"C:\Program Files\WindowsApps\OpenAI.Codex_*\app\resources\codex.exe"))
    if hits:
        return hits[-1]
    sys.exit("codex not found. Set CODEX_EXE to the full path of codex.exe")


def raw_path(card_id: str, variant: str | None = None) -> Path:
    """art/raw/<book>/<id>.png, or art/raw-variants/<variant>/<book>/<id>.png for an alternative style."""
    book = SCENES[card_id][0]
    base = ROOT / "art" / "raw-variants" / variant if variant else RAW
    return base / book / f"{card_id}.png"


def build_prompt(card_id: str, variant: str | None = None) -> str:
    book, scene = SCENES[card_id]
    setting = PROMPTS["books"][book]["setting"]
    common = PROMPTS["variants"][variant]["common"] if variant else PROMPTS["common"]
    return (
        "Generate exactly ONE image using your built-in image generation tool (image_gen). "
        "Do not write code, do not run shell commands, do not generate more than one image.\n\n"
        "Image spec:\n"
        "- Landscape orientation, 3:2 aspect ratio (1536x1024).\n"
        "- Purpose: the illustration window of a collectible trading card about a Bible character.\n"
        f"- {common}\n"
        f"- {setting}\n"
        f"- Scene: {scene}\n"
        f"- {PROMPTS['avoid']}\n\n"
        "When the image has been generated, reply with the single word: done"
    )


def newest_png(thread_id: str) -> Path | None:
    folder = GEN_DIR / thread_id
    pngs = sorted(folder.glob("*.png"), key=lambda p: p.stat().st_mtime) if folder.exists() else []
    return pngs[-1] if pngs else None


def generate(card_id: str, codex: str, timeout: int, variant: str | None = None) -> bool:
    out = raw_path(card_id, variant)
    out.parent.mkdir(parents=True, exist_ok=True)
    prompt = build_prompt(card_id, variant)
    tag = f"{variant}/{card_id}" if variant else card_id
    cmd = [codex, "exec", "--skip-git-repo-check", "--ephemeral", "-s", "read-only", "--json", "-C", str(ROOT), "-"]
    for attempt in (1, 2):
        started = time.time()
        log(f"[{tag}] attempt {attempt}: starting codex …")
        try:
            proc = subprocess.run(
                cmd, input=prompt, capture_output=True, text=True, encoding="utf-8",
                errors="replace", timeout=timeout,
            )
        except subprocess.TimeoutExpired:
            log(f"[{tag}] timed out after {timeout}s")
            continue
        (LOGS / f"{tag.replace('/', '__')}.jsonl").write_text(proc.stdout + "\n---stderr---\n" + proc.stderr, encoding="utf-8")
        thread_id = None
        for line in proc.stdout.splitlines():
            try:
                ev = json.loads(line)
            except json.JSONDecodeError:
                continue
            if ev.get("type") == "thread.started":
                thread_id = ev.get("thread_id")
                break
        png = newest_png(thread_id) if thread_id else None
        if png:
            shutil.copyfile(png, out)
            log(f"[{tag}] OK -> {out.relative_to(ROOT)} ({out.stat().st_size // 1024} KB, {time.time() - started:.0f}s)")
            return True
        log(f"[{tag}] no image found (exit {proc.returncode}, thread {thread_id}); see art/logs/")
    return False


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("ids", nargs="*", help="card ids from art_prompts.json")
    ap.add_argument("--book", help="every card of this book id")
    ap.add_argument("--all", action="store_true", help="every card of every book")
    ap.add_argument("--variant", help="alternative art style from art_prompts.json 'variants' (or 'all'); output goes to art/raw-variants/")
    ap.add_argument("--force", action="store_true", help="regenerate even if the raw PNG exists")
    ap.add_argument("--jobs", type=int, default=3, help="parallel codex processes")
    ap.add_argument("--timeout", type=int, default=900, help="seconds per attempt")
    args = ap.parse_args()

    if args.all:
        ids = list(SCENES)
    elif args.book:
        if args.book not in PROMPTS["books"]:
            sys.exit(f"unknown book {args.book!r}; choices: {', '.join(PROMPTS['books'])}")
        ids = list(PROMPTS["books"][args.book]["scenes"])
    else:
        ids = args.ids
    unknown = [i for i in ids if i not in SCENES]
    if unknown or not ids:
        sys.exit(f"unknown or missing ids {unknown}; choices: {', '.join(SCENES)}")
    LOGS.mkdir(parents=True, exist_ok=True)
    variants: list[str | None] = [None]
    if args.variant:
        known = list(PROMPTS.get("variants", {}))
        variants = known if args.variant == "all" else [args.variant]
        bad = [v for v in variants if v not in known]
        if bad:
            sys.exit(f"unknown variant {bad}; choices: {', '.join(known)}")
    jobs = [(v, i) for v in variants for i in ids]
    todo = [(v, i) for v, i in jobs if args.force or not raw_path(i, v).exists()]
    log(f"{len(todo)} to generate ({len(jobs) - len(todo)} already done)")
    if not todo:
        return 0
    codex = find_codex()

    failed = []
    with ThreadPoolExecutor(max_workers=args.jobs) as ex:
        futs = {ex.submit(generate, i, codex, args.timeout, v): (v, i) for v, i in todo}
        for fut in as_completed(futs):
            if not fut.result():
                failed.append(futs[fut])
    log(f"done. failed: {failed or 'none'}")
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
