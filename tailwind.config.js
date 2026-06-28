/** @type {import('tailwindcss').Config} */
export default {
  // "class" strategy = we toggle dark mode by adding/removing the
  // `dark` class on <html>. Colors below are driven by CSS variables
  // (see src/index.css), so the whole site re-themes automatically.
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Manrope = headings/body. JetBrains Mono = small UI labels.
        sans: ["Manrope", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      // Semantic color tokens. Change a color once in index.css and it
      // updates everywhere. `/` opacity (e.g. bg-brand/10) works too.
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)", // page background
        band: "rgb(var(--band) / <alpha-value>)", // alternating section tint
        card: "rgb(var(--card) / <alpha-value>)", // card surface
        edge: "rgb(var(--edge) / <alpha-value>)", // borders / hairlines
        fg: "rgb(var(--fg) / <alpha-value>)", // primary text
        muted: "rgb(var(--muted) / <alpha-value>)", // secondary text
        brand: {
          DEFAULT: "rgb(var(--brand) / <alpha-value>)", // accent blue
          2: "rgb(var(--brand-2) / <alpha-value>)", // accent teal
        },
      },
    },
  },
  plugins: [],
};
