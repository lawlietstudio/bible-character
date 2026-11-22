#!/usr/bin/env python3
"""Turn raw Codex PNGs (~3 MB each) into web-sized WebP files.

    python scripts/optimize_art.py
        art/raw/<book>/<id>.png                         -> assets/art/<book>/<id>.webp
        art/raw-variants/<style>/<book>/<id>.png        -> assets/art-variants/<style>/<book>/<id>.webp
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
WIDTH = 1100  # card art window is ~330-480 css px wide; 1100 stays sharp at 2x


def convert(raw_book_dir: Path, out_dir: Path, label: str) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    for src in sorted(raw_book_dir.glob("*.png")):
        dst = out_dir / f"{src.stem}.webp"
        if dst.exists() and dst.stat().st_mtime >= src.stat().st_mtime:
            continue
        im = Image.open(src).convert("RGB")
        h = round(im.height * WIDTH / im.width)
        im = im.resize((WIDTH, h), Image.LANCZOS)
        im.save(dst, "WEBP", quality=84, method=6)
        print(f"{label}/{src.name} -> {dst.relative_to(ROOT)} ({dst.stat().st_size // 1024} KB)")


def main() -> None:
    raw = ROOT / "art" / "raw"
    for book_dir in sorted(p for p in raw.iterdir() if p.is_dir()):
        convert(book_dir, ROOT / "assets" / "art" / book_dir.name, book_dir.name)
    variants = ROOT / "art" / "raw-variants"
    if variants.exists():
        for style_dir in sorted(p for p in variants.iterdir() if p.is_dir()):
            for book_dir in sorted(p for p in style_dir.iterdir() if p.is_dir()):
                convert(book_dir, ROOT / "assets" / "art-variants" / style_dir.name / book_dir.name, f"{style_dir.name}/{book_dir.name}")


if __name__ == "__main__":
    main()
