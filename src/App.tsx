import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Paper1 from "./pages/Paper1";
import Paper2 from "./pages/Paper2";
import MockTests from "./pages/MockTests";
import Updates from "./pages/Updates";

type Theme = "dark" | "light";

// Scrolls to the top whenever you move to a new page (but leaves
// in-page "#section" links alone so they still scroll normally).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  // Read the saved theme, defaulting to light mode for first-time visitors.
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    // If nothing is saved, default to light mode
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    return "light"; // Default to light mode for new visitors
  });

  // Whenever the theme changes, update the <html> class and save it.
  // Tailwind's `dark:` variants react to this `dark` class, so the
  // ENTIRE site switches themes at once.
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Shared layout: header + page content + footer on every route. */}
      <div className="flex min-h-screen flex-col">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <main className="flex-1">
          {/* ── ROUTES: add a new <Route> here to add a new page ──
              Also add the path to src/seo/routes.ts so it shows up in sitemap.xml */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paper-1" element={<Paper1 />} />
            <Route path="/paper-2" element={<Paper2 />} />
            <Route path="/mock-tests" element={<MockTests />} />
            <Route path="/updates" element={<Updates />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
