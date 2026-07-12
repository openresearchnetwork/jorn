#!/usr/bin/env python3
"""Validate generated internal resources and JSON-LD without network access."""

from __future__ import annotations

import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse


SITE_DIR = Path(sys.argv[1] if len(sys.argv) > 1 else "build").resolve()
SITE_PREFIX = "/jorn/"


class ResourceParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.urls: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        url = attributes.get("href") if tag in {"a", "link"} else attributes.get("src") if tag == "script" else None
        if url:
            self.urls.append(url)


def candidates(target: Path) -> list[Path]:
    if target.suffix:
        return [target]
    return [target, target / "index.html", target.with_suffix(".html")]


def local_target(source: Path, raw_url: str) -> Path | None:
    parsed = urlparse(raw_url)
    if parsed.scheme or parsed.netloc or raw_url.startswith(("#", "mailto:", "tel:", "data:")):
        return None

    path = unquote(parsed.path)
    if path.startswith(SITE_PREFIX):
        return SITE_DIR / path.removeprefix(SITE_PREFIX)
    if path in {SITE_PREFIX.rstrip("/"), f"{SITE_PREFIX.rstrip('/')}/."}:
        return SITE_DIR
    if path.startswith("/"):
        return None
    return (source.parent / path).resolve()


def main() -> int:
    broken: list[tuple[Path, str]] = []
    invalid_jsonld: list[tuple[Path, str]] = []
    html_files = list(SITE_DIR.rglob("*.html"))

    for html_file in html_files:
        markup = html_file.read_text(encoding="utf-8", errors="ignore")
        parser = ResourceParser()
        parser.feed(markup)

        for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', markup, re.DOTALL):
            try:
                json.loads(block)
            except json.JSONDecodeError as error:
                invalid_jsonld.append((html_file.relative_to(SITE_DIR), str(error)))

        for raw_url in parser.urls:
            target = local_target(html_file, raw_url)
            if target is not None and not any(path.exists() for path in candidates(target)):
                broken.append((html_file.relative_to(SITE_DIR), raw_url))

    for source, detail in broken:
        print(f"broken internal resource: {source} -> {detail}", file=sys.stderr)
    for source, detail in invalid_jsonld:
        print(f"invalid JSON-LD: {source} -> {detail}", file=sys.stderr)

    if broken or invalid_jsonld:
        return 1
    print(f"Checked {len(html_files)} HTML files: internal resources and JSON-LD passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
