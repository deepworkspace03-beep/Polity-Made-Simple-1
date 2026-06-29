import { useEffect, useRef, useState } from "react";
import { ScrollText } from "lucide-react";
import { SYLLABUS, type SyllabusPaper } from "../data/syllabus";

/**
 * A small, elegant "Syllabus" chip placed in the corner of a Paper card.
 * Tapping it opens a lightweight language picker (English / हिंदी); choosing
 * a language opens the matching official syllabus PDF in a new tab.
 *
 * Designed to sit on top of a "stretched link" card without hijacking the
 * card's own navigation — it is a sibling of the link, never a child.
 */
export default function SyllabusChip({
  paper,
  label,
}: {
  paper: SyllabusPaper;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const langs: { key: "English" | "Hindi"; native: string }[] = [
    { key: "English", native: "English" },
    { key: "Hindi", native: "हिंदी" },
  ];

  return (
    <div ref={ref} className="relative z-20">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setOpen((o) => !o);
        }}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${label} syllabus`}
        className="inline-flex shrink-0 items-center gap-1 rounded-full border border-edge bg-card/80 px-1.5 py-0.5 text-[9px] font-semibold text-muted backdrop-blur-sm transition-all hover:border-brand/40 hover:text-brand active:scale-95 sm:px-2 sm:text-[10px]"
      >
        <ScrollText size={10} className="shrink-0 sm:h-3 sm:w-3" />
        Syllabus
      </button>

      {open && (
        <div
          role="menu"
          aria-label={`${label} syllabus language`}
          className="anim-pop absolute right-0 top-full z-30 mt-1.5 w-32 origin-top-right overflow-hidden rounded-xl border border-edge bg-card p-1 shadow-[var(--shadow-card-hover)]"
        >
          <p className="px-2 pb-1 pt-0.5 font-mono text-[8px] uppercase tracking-widest text-muted/70">
            Choose language
          </p>
          {langs.map((l) => (
            <a
              key={l.key}
              href={SYLLABUS[paper][l.key]}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-lg px-2 py-1.5 text-[12px] font-semibold text-fg transition-colors hover:bg-brand/10 hover:text-brand"
            >
              {l.native}
              <span aria-hidden="true" className="text-muted/50">›</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
