#!/usr/bin/env python3
"""Convert all .md files in this folder to PDF via markdown-it + chrome headless."""
import glob
import os
import subprocess
import sys
import tempfile
from pathlib import Path

import markdown_it

HERE = Path(__file__).parent
CSS = """
<style>
  @page { size: A4; margin: 22mm 20mm; }
  body {
    font-family: -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #1f2933;
    line-height: 1.55;
    font-size: 11.5pt;
    max-width: 100%;
  }
  h1 { color: #32969B; font-size: 22pt; border-bottom: 2px solid #32969B; padding-bottom: 6px; margin-top: 0; }
  h2 { color: #1f6e72; font-size: 15pt; margin-top: 28px; }
  h3 { color: #1f6e72; font-size: 12.5pt; margin-top: 22px; }
  h4 { color: #2b3440; font-size: 11.5pt; margin-top: 18px; }
  p, ul, ol { margin: 9px 0; }
  ul, ol { padding-left: 22px; }
  li { margin: 4px 0; }
  table { border-collapse: collapse; width: 100%; margin: 14px 0; font-size: 10.5pt; }
  th, td { border: 1px solid #d0d6dd; padding: 7px 10px; text-align: left; vertical-align: top; }
  th { background: #f1f6f7; color: #1f6e72; font-weight: 600; }
  code { background: #f1f3f5; padding: 1px 5px; border-radius: 3px; font-size: 10pt; }
  blockquote {
    border-left: 3px solid #32969B;
    background: #f6fbfb;
    padding: 8px 14px;
    margin: 14px 0;
    color: #2b3440;
  }
  hr { border: none; border-top: 1px solid #d0d6dd; margin: 22px 0; }
  strong { color: #1f6e72; }
  a { color: #32969B; }
</style>
"""

def convert(md_path: Path):
    md_text = md_path.read_text(encoding="utf-8")
    html_body = markdown_it.MarkdownIt("commonmark", {"breaks": False, "html": True}).enable("table").render(md_text)
    title = md_path.stem
    full_html = f"""<!doctype html>
<html lang="pt-br"><head><meta charset="utf-8"><title>{title}</title>{CSS}</head>
<body>{html_body}</body></html>"""

    # Write HTML to temp file, then convert with chrome
    with tempfile.NamedTemporaryFile(suffix=".html", delete=False, mode="w", encoding="utf-8") as tmp:
        tmp.write(full_html)
        tmp_path = tmp.name

    pdf_path = md_path.with_suffix(".pdf")
    try:
        result = subprocess.run([
            "google-chrome",
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--no-pdf-header-footer",
            f"--print-to-pdf={pdf_path}",
            f"file://{tmp_path}",
        ], capture_output=True, text=True, timeout=60)
        if result.returncode != 0:
            print(f"FAIL {md_path.name}: {result.stderr[:400]}", file=sys.stderr)
            return False
        print(f"OK   {pdf_path.name}")
        return True
    finally:
        os.unlink(tmp_path)

def main():
    md_files = sorted(HERE.glob("*.md"))
    if not md_files:
        print("No .md files found")
        return 1
    failures = 0
    for md in md_files:
        if not convert(md):
            failures += 1
    return 1 if failures else 0

if __name__ == "__main__":
    sys.exit(main())
