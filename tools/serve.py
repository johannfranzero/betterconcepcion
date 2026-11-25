"""Local preview server that behaves like the live host (vercel.json: cleanUrls).

`/services/certificates` serves `services/certificates.html`, and a missing page
serves 404.html, so links work locally exactly as they do online.

Run from the repository root:  python tools/serve.py [port]
"""
import http.server
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class CleanUrlHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def send_head(self):
        path = self.translate_path(self.path)
        if not os.path.exists(path) and os.path.exists(path + ".html"):
            # cleanUrls: /a/b -> /a/b.html (keep any query string)
            base, sep, query = self.path.partition("?")
            self.path = base + ".html" + (sep + query if sep else "")
        elif not os.path.exists(path):
            self.send_response(404)
            not_found = os.path.join(ROOT, "404.html")
            body = open(not_found, "rb").read() if os.path.exists(not_found) else b"Not found"
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return None
        return super().send_head()

    def end_headers(self):
        # Always revalidate during development so edits show on reload
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    server = http.server.ThreadingHTTPServer(("127.0.0.1", port), CleanUrlHandler)
    print(f"Serving {ROOT} on http://127.0.0.1:{port} (clean URLs)")
    server.serve_forever()
