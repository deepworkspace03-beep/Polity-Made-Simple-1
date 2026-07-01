// Single source of truth for the site's public routes — keep this in sync
// with the <Route> list in src/App.tsx. vite.config.ts reads this array to
// regenerate sitemap.xml on every build, so a new page only needs adding here
// once (no separate sitemap file to hand-edit).
export interface SitemapRoute {
  path: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

export const PUBLIC_ROUTES: SitemapRoute[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/paper-1", changefreq: "weekly", priority: 0.8 },
  { path: "/paper-2", changefreq: "weekly", priority: 0.8 },
  { path: "/mock-tests", changefreq: "weekly", priority: 0.8 },
  { path: "/updates", changefreq: "daily", priority: 0.7 },
];
