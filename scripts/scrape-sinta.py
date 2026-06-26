#!/usr/bin/env python3
"""
Look up an author on SINTA (sinta.kemdiktisaintek.go.id) and scrape:
- SINTA link        -> SINTA profile URL
- Scopus link       -> SINTA Scopus view URL
- SINTA score       -> V3 Overall "TOTAL ALL SCORE"
- Scopus score      -> Scopus H-Index from the Summary table
- Google Scholar score -> GScholar H-Index from the Summary table

Requires:
- Python 3
- agent-browser CLI (npm i -g agent-browser && agent-browser install)

Usage:
    python scripts/scrape-sinta.py "Dini Cahyani"
"""

import re
import shutil
import subprocess
import sys
import urllib.parse


def run_shell(script: str) -> str:
    """Run a bash shell script and return stdout."""
    bash = shutil.which("bash") or r"C:\Program Files\Git\bin\bash.exe"
    result = subprocess.run(
        [bash, "-c", script],
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        err = result.stderr.strip() or result.stdout.strip() or "unknown error"
        raise RuntimeError(f"agent-browser failed: {err}")
    return result.stdout


def extract_between(text: str, start_marker: str, end_marker: str) -> str:
    start = text.find(start_marker)
    if start == -1:
        return ""
    start += len(start_marker)
    end = text.find(end_marker, start)
    if end == -1:
        return ""
    return text[start:end].strip()


def parse_sinta_score(metrics_html: str) -> str | None:
    """Extract V3 OverallSinta total from the metrics table."""
    # Find the TOTAL ALL SCORE row and grab the first numeric cell after it.
    match = re.search(
        r"TOTAL ALL SCORE.*?<th[^>]*class=\"matriks-score-all text-center\">([\d.]+)</th>",
        metrics_html,
        re.DOTALL | re.IGNORECASE,
    )
    return match.group(1) if match else None


def parse_summary_hindex(summary_html: str) -> tuple[str | None, str | None]:
    """Extract (scopus_hindex, gscholar_hindex) from the summary table."""
    match = re.search(
        r"<td[^>]*>H-Index</td>\s*"
        r"<td[^>]*>(.*?)</td>\s*"
        r"<td[^>]*>(.*?)</td>",
        summary_html,
        re.DOTALL | re.IGNORECASE,
    )
    if not match:
        return None, None
    scopus = re.sub(r"<[^>]+>", "", match.group(1)).strip() or "0"
    gscholar = re.sub(r"<[^>]+>", "", match.group(2)).strip() or "0"
    return scopus, gscholar


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: python scripts/scrape-sinta.py \"Author Name\"", file=sys.stderr)
        return 1

    name = sys.argv[1].strip()
    if not name:
        print("Error: author name is empty", file=sys.stderr)
        return 1

    encoded_name = urllib.parse.quote(name)
    search_url = f"https://sinta.kemdiktisaintek.go.id/authors?q={encoded_name}"
    upper_name = name.upper()

    # Build one shell session so agent-browser commands share the browser.
    shell_script = f"""set -e
agent-browser open "{search_url}" >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1

if ! agent-browser find text "{upper_name}" click >/dev/null 2>&1; then
    echo "ERROR: Author not found in search results" >&2
    agent-browser close >/dev/null 2>&1
    exit 1
fi
agent-browser wait --load networkidle >/dev/null 2>&1

PROFILE_URL=$(agent-browser get url 2>/dev/null)

agent-browser find text "Metrics" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
METRICS_HTML=$(agent-browser get html "table" 2>/dev/null)

# Return to the profile summary page
agent-browser open "$PROFILE_URL" >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
SUMMARY_HTML=$(agent-browser get html "table" 2>/dev/null)

agent-browser close >/dev/null 2>&1

echo "PROFILE_URL=$PROFILE_URL"
echo "---METRICS_START---"
echo "$METRICS_HTML"
echo "---METRICS_END---"
echo "---SUMMARY_START---"
echo "$SUMMARY_HTML"
echo "---SUMMARY_END---"
"""

    try:
        output = run_shell(shell_script)
    except RuntimeError as exc:
        print(exc, file=sys.stderr)
        return 1

    if output.strip().startswith("ERROR:"):
        print(output.strip(), file=sys.stderr)
        return 1

    profile_url_match = re.search(r"PROFILE_URL=(.+)", output)
    profile_url = profile_url_match.group(1).strip() if profile_url_match else None

    sinta_id = None
    sinta_link = None
    scopus_link = None
    if profile_url:
        sinta_id_match = re.search(r"/authors/profile/(\d+)", profile_url)
        sinta_id = sinta_id_match.group(1) if sinta_id_match else None
        sinta_link = f"https://sinta.kemdiktisaintek.go.id/authors/profile/{sinta_id}"
        scopus_link = f"https://sinta.kemdiktisaintek.go.id/authors/profile/{sinta_id}/?view=scopus"

    metrics_html = extract_between(output, "---METRICS_START---", "---METRICS_END---")
    summary_html = extract_between(output, "---SUMMARY_START---", "---SUMMARY_END---")

    sinta_score = parse_sinta_score(metrics_html)
    scopus_score, gscholar_score = parse_summary_hindex(summary_html)

    result = {
        "query": name,
        "sinta_id": sinta_id,
        "sinta_link": sinta_link,
        "scopus_link": scopus_link,
        "sinta_score": sinta_score,
        "scopus_score": scopus_score,
        "google_scholar_score": gscholar_score,
    }

    print(json.dumps(result, indent=2))
    return 0


if __name__ == "__main__":
    import json

    sys.exit(main())
