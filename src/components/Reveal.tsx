import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wrap any section in <Reveal> to make it gently fade in the first
 * time it scrolls into view. Uses the browser's built-in
 * IntersectionObserver — no animation library needed.
 *
 * Motion is automatically disabled for users who prefer reduced
 * motion (handled in index.css).
 */
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // reveal once, then stop watching
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
