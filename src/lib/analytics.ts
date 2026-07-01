// Thin wrapper around the gtag.js loaded in index.html. Kept separate from
// the page-view tracker in App.tsx so the GA4 measurement ID has one home.
export const GA_MEASUREMENT_ID = "G-Q9WQB602V2";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// Fires a GA4 page_view event. Called on every React Router navigation
// (see RouteTracker in App.tsx) since gtag's own automatic pageview is
// disabled for the SPA to avoid double-counting.
export function trackPageView(path: string): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
    send_to: GA_MEASUREMENT_ID,
  });
}
