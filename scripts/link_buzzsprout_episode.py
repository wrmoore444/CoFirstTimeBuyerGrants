"""
Link a published Buzzsprout episode to an article in the GCS articles.json feed.

Usage:
  python scripts/link_buzzsprout_episode.py --slug <article-slug> --episode-id <buzzsprout-episode-id>

Required environment variables (or .env in project root):
  BUZZSPROUT_PODCAST_ID  - Your Buzzsprout podcast ID
  GCS_BUCKET             - GCS bucket name (e.g. pivot-lending-content)
  GCS_ARTICLES_PATH      - Path within bucket (e.g. articles/articles.json)

GCS authentication uses Application Default Credentials. Set
GOOGLE_APPLICATION_CREDENTIALS to a service account key file if not running
in a GCP environment with a default service account.
"""

import argparse
import json
import os
import sys
from pathlib import Path

try:
    from dotenv import load_dotenv
    load_dotenv(Path(__file__).parent.parent / ".env")
except ImportError:
    pass

try:
    from google.cloud import storage
except ImportError:
    print("ERROR: google-cloud-storage is not installed. Run: pip install google-cloud-storage", file=sys.stderr)
    sys.exit(1)


def main() -> int:
    parser = argparse.ArgumentParser(description="Link a Buzzsprout episode to a GCS article.")
    parser.add_argument("--slug", required=True, help="Article slug to update")
    parser.add_argument("--episode-id", required=True, type=int, help="Buzzsprout episode ID")
    args = parser.parse_args()

    podcast_id = os.environ.get("BUZZSPROUT_PODCAST_ID")
    bucket_name = os.environ.get("GCS_BUCKET")
    articles_path = os.environ.get("GCS_ARTICLES_PATH")

    missing = [k for k, v in {
        "BUZZSPROUT_PODCAST_ID": podcast_id,
        "GCS_BUCKET": bucket_name,
        "GCS_ARTICLES_PATH": articles_path,
    }.items() if not v]
    if missing:
        print(f"ERROR: Missing required environment variables: {', '.join(missing)}", file=sys.stderr)
        return 1

    embed_url = (
        f"https://www.buzzsprout.com/{podcast_id}/{args.episode_id}"
        f"?client_source=small_player&iframe=true"
    )

    try:
        client = storage.Client()
    except Exception as exc:
        print(f"ERROR: Failed to initialise GCS client: {exc}", file=sys.stderr)
        return 1

    bucket = client.bucket(bucket_name)
    blob = bucket.blob(articles_path)

    try:
        raw = blob.download_as_text(encoding="utf-8")
    except Exception as exc:
        print(f"ERROR: Could not download gs://{bucket_name}/{articles_path}: {exc}", file=sys.stderr)
        return 1

    try:
        articles = json.loads(raw)
    except json.JSONDecodeError as exc:
        print(f"ERROR: articles.json is not valid JSON: {exc}", file=sys.stderr)
        return 1

    if not isinstance(articles, list):
        print("ERROR: articles.json does not contain a JSON array", file=sys.stderr)
        return 1

    match = next((a for a in articles if a.get("slug") == args.slug), None)
    if match is None:
        print(f"ERROR: No article found with slug '{args.slug}'", file=sys.stderr)
        return 1

    if match.get("buzzsproutEmbedUrl"):
        print(f"WARNING: Overwriting existing buzzsproutEmbedUrl for '{args.slug}'", file=sys.stderr)
        print(f"  Old: {match['buzzsproutEmbedUrl']}", file=sys.stderr)

    match["buzzsproutEmbedUrl"] = embed_url

    backup_path = articles_path + ".bak"
    try:
        bucket.blob(backup_path).upload_from_string(raw, content_type="application/json")
        print(f"Backup written to gs://{bucket_name}/{backup_path}")
    except Exception as exc:
        print(f"ERROR: Could not write backup: {exc}", file=sys.stderr)
        return 1

    updated = json.dumps(articles, indent=2, ensure_ascii=False)
    try:
        blob.upload_from_string(updated, content_type="application/json")
    except Exception as exc:
        print(f"ERROR: Failed to upload updated articles.json: {exc}", file=sys.stderr)
        return 1

    print(f"SUCCESS: Updated '{args.slug}' with Buzzsprout embed URL:")
    print(f"  {embed_url}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
