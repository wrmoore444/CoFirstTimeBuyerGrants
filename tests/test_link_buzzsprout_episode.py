"""Tests for scripts/link_buzzsprout_episode.py"""

import io, json, os, sys, unittest
from contextlib import redirect_stderr
from unittest.mock import MagicMock, patch

# Inject google.cloud.storage mock so script can be imported without the package
sys.modules.setdefault("google", MagicMock())
sys.modules.setdefault("google.cloud", MagicMock())
sys.modules.setdefault("google.cloud.storage", MagicMock())

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "scripts"))
import link_buzzsprout_episode as script  # noqa: E402

ENV = {"BUZZSPROUT_PODCAST_ID": "123", "GCS_BUCKET": "b", "GCS_ARTICLES_PATH": "a/a.json"}
ARTICLES = [{"slug": "art", "en": {}}, {"slug": "other", "en": {}}]


def _blob(text): b = MagicMock(); b.download_as_text.return_value = text; return b


class T(unittest.TestCase):

    def _run(self, args, env=None, main_blob=None, backup_blob=None):
        used = env if env is not None else ENV
        buf = io.StringIO()
        with patch.dict(os.environ, used, clear=True), patch.object(script, "storage") as st:
            bucket = MagicMock()
            mb = main_blob or _blob(json.dumps(ARTICLES))
            bb = backup_blob or MagicMock()
            bucket.blob.side_effect = lambda p: bb if p.endswith(".bak") else mb
            st.Client.return_value.bucket.return_value = bucket
            with patch("sys.argv", ["s"] + args), redirect_stderr(buf):
                code = script.main()
        return code, buf.getvalue(), mb

    def test_success_updates_article(self):
        captured = {}
        mb = _blob(json.dumps(ARTICLES))
        mb.upload_from_string.side_effect = lambda d, **k: captured.update({"d": d})
        code, err, _ = self._run(["--slug", "art", "--episode-id", "7"], main_blob=mb)
        self.assertEqual(code, 0)
        match = next(a for a in json.loads(captured["d"]) if a["slug"] == "art")
        self.assertEqual(
            match["buzzsproutEmbedUrl"],
            "https://www.buzzsprout.com/123/7?client_source=small_player&iframe=true",
        )
        self.assertNotIn("buzzsproutEmbedUrl", json.loads(captured["d"])[1])

    def test_success_prints_to_stdout_not_stderr(self):
        code, err, _ = self._run(["--slug", "art", "--episode-id", "1"])
        self.assertEqual(code, 0)
        self.assertNotIn("ERROR", err)

    def test_embed_url_format(self):
        captured = {}
        mb = _blob(json.dumps(ARTICLES))
        mb.upload_from_string.side_effect = lambda d, **k: captured.update({"d": d})
        self._run(["--slug", "art", "--episode-id", "99"], main_blob=mb)
        match = next(a for a in json.loads(captured["d"]) if a["slug"] == "art")
        self.assertIn("123/99", match["buzzsproutEmbedUrl"])
        self.assertIn("client_source=small_player&iframe=true", match["buzzsproutEmbedUrl"])

    def test_missing_podcast_id_exits_1_with_error_on_stderr(self):
        env = {k: v for k, v in ENV.items() if k != "BUZZSPROUT_PODCAST_ID"}
        code, err, _ = self._run(["--slug", "x", "--episode-id", "1"], env=env)
        self.assertEqual(code, 1); self.assertIn("ERROR", err)

    def test_missing_bucket_exits_1_with_error_on_stderr(self):
        env = {k: v for k, v in ENV.items() if k != "GCS_BUCKET"}
        code, err, _ = self._run(["--slug", "x", "--episode-id", "1"], env=env)
        self.assertEqual(code, 1); self.assertIn("ERROR", err)

    def test_missing_articles_path_exits_1_with_error_on_stderr(self):
        env = {k: v for k, v in ENV.items() if k != "GCS_ARTICLES_PATH"}
        code, err, _ = self._run(["--slug", "x", "--episode-id", "1"], env=env)
        self.assertEqual(code, 1); self.assertIn("ERROR", err)

    def test_gcs_client_failure_exits_1_with_error_on_stderr(self):
        buf = io.StringIO()
        with patch.dict(os.environ, ENV, clear=True), patch.object(script, "storage") as st:
            st.Client.side_effect = Exception("auth")
            with patch("sys.argv", ["s", "--slug", "art", "--episode-id", "1"]), redirect_stderr(buf):
                code = script.main()
        self.assertEqual(code, 1); self.assertIn("ERROR", buf.getvalue())

    def test_download_failure_exits_1_with_error_on_stderr(self):
        mb = MagicMock(); mb.download_as_text.side_effect = Exception("net")
        code, err, _ = self._run(["--slug", "art", "--episode-id", "1"], main_blob=mb)
        self.assertEqual(code, 1); self.assertIn("ERROR", err)

    def test_invalid_json_exits_1_with_error_on_stderr(self):
        code, err, _ = self._run(["--slug", "art", "--episode-id", "1"], main_blob=_blob("{{{"))
        self.assertEqual(code, 1); self.assertIn("ERROR", err)

    def test_non_list_json_exits_1_with_error_on_stderr(self):
        code, err, _ = self._run(["--slug", "art", "--episode-id", "1"], main_blob=_blob('{}'))
        self.assertEqual(code, 1); self.assertIn("ERROR", err)

    def test_unknown_slug_exits_1_with_error_on_stderr(self):
        code, err, _ = self._run(["--slug", "nope", "--episode-id", "1"])
        self.assertEqual(code, 1); self.assertIn("ERROR", err)

    def test_backup_failure_exits_1_with_error_on_stderr(self):
        bb = MagicMock(); bb.upload_from_string.side_effect = Exception("bak")
        code, err, _ = self._run(["--slug", "art", "--episode-id", "1"], backup_blob=bb)
        self.assertEqual(code, 1); self.assertIn("ERROR", err)

    def test_upload_failure_exits_1_with_error_on_stderr(self):
        mb = _blob(json.dumps(ARTICLES)); mb.upload_from_string.side_effect = Exception("up")
        code, err, _ = self._run(["--slug", "art", "--episode-id", "1"], main_blob=mb)
        self.assertEqual(code, 1); self.assertIn("ERROR", err)


if __name__ == "__main__":
    unittest.main()
