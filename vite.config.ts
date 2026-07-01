import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { PUBLIC_ROUTES } from "./src/seo/routes";

// Canonical production domain. Override with a SITE_URL env var for
// previews/other deployments if needed.
const SITE_URL = (process.env.SITE_URL || "https://www.politymadesimple.com").replace(/\/$/, "");

// Regenerates sitemap.xml + robots.txt into dist/ on every production build,
// straight from PUBLIC_ROUTES — so they're always present, always in sync
// with the site's actual pages, and never go stale between deploys.
function sitemapPlugin(): Plugin {
  return {
    name: "generate-sitemap-and-robots",
    apply: "build",
    writeBundle(options) {
      const outDir = options.dir ?? "dist";
      const today = new Date().toISOString().slice(0, 10);

      const urls = PUBLIC_ROUTES.map(
        ({ path, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`,
      ).join("\n");

      writeFileSync(
        resolve(outDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );

      writeFileSync(
        resolve(outDir, "robots.txt"),
        `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
      );
    },
  };
}

// Minimal Vite config. Nothing fancy needed for v1.
export default defineConfig({
  plugins: [react(), sitemapPlugin()],
});
