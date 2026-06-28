import { Link } from "react-router-dom";
import {
  FileText,
  GraduationCap,
  Languages,
  BookOpen,
  Landmark,
  Zap,
} from "lucide-react";
import { SITE } from "../config";
import { UPDATES } from "../data/updates";

const PAPER_1_TOPICS = ["Teaching Aptitude", "Research Methodology", "ICT & Reasoning"];
const PAPER_2_TOPICS = ["Political Theory", "Indian Government", "International Relations"];

export default function Hero() {
  return (
    <section
      id="home"
      className="section-hero relative overflow-hidden border-b border-edge"
    >
      {/* ── Animated glow blobs ── */}
      <div
        aria-hidden="true"
        className="anim-glow pointer-events-none absolute left-1/2 top-0 h-80 w-[52rem] max-w-full -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="anim-glow-slow pointer-events-none absolute -right-16 top-8 h-96 w-96 rounded-full bg-brand-2/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="anim-glow pointer-events-none absolute -left-16 bottom-8 h-64 w-64 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex min-h-[calc(100svh-68px)] flex-col lg:flex-row">

          {/* ── Main hero content ── */}
          <div className="flex flex-1 flex-col items-center justify-center px-4 py-14 text-center sm:px-10">

            {/* Eyebrow */}
            <span className="anim-hero eyebrow inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
              {SITE.initiative}
            </span>

            {/* Heading */}
            <h1 className="anim-hero anim-d1 mt-4 text-[2.6rem] font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-[4.5rem]">
              Political Science{" "}
              <span className="text-gradient">Made Simple</span>
            </h1>

            {/* Subtitle */}
            <p className="anim-hero anim-d2 mx-auto mt-4 max-w-lg text-sm text-muted sm:text-base">
              Notes, PYQs, mock tests, current affairs and exam strategy —{" "}
              <br className="hidden sm:block" />
              everything you need, in one clean place.
            </p>

            {/* Exam badge — fades in then floats */}
            <div className="anim-hero anim-d3 mt-8 flex justify-center">
              <div className="anim-float inline-flex items-center gap-3 border border-edge bg-card px-5 py-3 shadow-md">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center gradient-brand text-white">
                  <GraduationCap size={16} />
                </span>
                <span className="text-sm font-bold text-fg sm:text-[15px]">
                  {SITE.examLabel}
                </span>
              </div>
            </div>

            {/* Paper cards — always 2 columns, full card is a link */}
            <div className="anim-hero anim-d4 mx-auto mt-8 grid w-full max-w-lg grid-cols-2 gap-3 sm:gap-4">

              {/* Paper 1 — whole card navigates */}
              <Link
                to="/paper-1"
                className="hero-card hero-card-p1 card flex flex-col p-3 text-left sm:p-5"
              >
                <div className="flex items-start justify-between">
                  <span className="eyebrow text-[9px] sm:text-[10px]">Paper 1</span>
                  <FileText size={12} className="mt-0.5 shrink-0 text-muted/50" />
                </div>
                <h3 className="mt-1.5 text-[15px] font-extrabold sm:mt-2 sm:text-xl">
                  General
                </h3>
                <ul className="mt-2 flex-1 space-y-1.5 sm:mt-3 sm:space-y-2">
                  {PAPER_1_TOPICS.map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-1.5 text-[10px] leading-snug text-muted sm:text-sm"
                    >
                      <span className="mt-[4px] h-1 w-1 shrink-0 rounded-full bg-brand sm:mt-[5px] sm:h-1.5 sm:w-1.5" />
                      {t}
                    </li>
                  ))}
                </ul>
                <span
                  className="mt-3 flex items-center justify-center py-2 text-[11px] font-semibold text-white sm:mt-4 sm:py-2.5 sm:text-sm"
                  style={{ backgroundColor: "rgb(var(--blue))" }}
                >
                  Open &rsaquo;
                </span>
              </Link>

              {/* Paper 2 — whole card navigates */}
              <Link
                to="/paper-2"
                className="hero-card hero-card-p2 card flex flex-col p-3 text-left sm:p-5"
              >
                <div className="flex items-start justify-between">
                  <span className="eyebrow text-[9px] sm:text-[10px]">Paper 2</span>
                  <FileText size={12} className="mt-0.5 shrink-0 text-muted/50" />
                </div>
                <h3 className="mt-1.5 text-[15px] font-extrabold sm:mt-2 sm:text-xl">
                  Political Science
                </h3>
                <ul className="mt-2 flex-1 space-y-1.5 sm:mt-3 sm:space-y-2">
                  {PAPER_2_TOPICS.map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-1.5 text-[10px] leading-snug text-muted sm:text-sm"
                    >
                      <span className="mt-[4px] h-1 w-1 shrink-0 rounded-full bg-brand-2 sm:mt-[5px] sm:h-1.5 sm:w-1.5" />
                      {t}
                    </li>
                  ))}
                </ul>
                <span
                  className="mt-3 flex items-center justify-center py-2 text-[11px] font-semibold text-white sm:mt-4 sm:py-2.5 sm:text-sm"
                  style={{ backgroundColor: "rgb(var(--green))" }}
                >
                  Open &rsaquo;
                </span>
              </Link>
            </div>

            {/* Language note */}
            <p className="anim-hero anim-d5 mt-5 inline-flex items-center justify-center gap-1.5 text-xs font-medium text-fg/60 sm:text-sm">
              <Languages size={13} />
              Available in both English + हिंदी
            </p>

            {/* Upcoming chips — always 2-column grid, responsive sizing */}
            <div className="anim-hero anim-d6 mx-auto mt-7 grid w-full max-w-lg grid-cols-2 gap-2 sm:gap-3">
              <div className="hero-chip hero-chip-cuet flex min-w-0 items-center gap-1.5 border border-edge bg-card px-2.5 py-2.5 sm:gap-2.5 sm:px-4 sm:py-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-brand-2/15 text-brand-2 sm:h-7 sm:w-7">
                  <BookOpen size={12} />
                </span>
                <span className="min-w-0 truncate text-xs font-semibold text-fg/80 sm:text-sm">CUET-PG</span>
                <span className="hidden shrink-0 bg-fg/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-fg/50 sm:block">
                  Upcoming
                </span>
              </div>
              <div className="hero-chip hero-chip-rset flex min-w-0 items-center gap-1.5 border border-edge bg-card px-2.5 py-2.5 sm:gap-2.5 sm:px-4 sm:py-3">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center sm:h-7 sm:w-7"
                  style={{ backgroundColor: "rgb(245 158 11 / 0.12)", color: "rgb(217 119 6)" }}
                >
                  <Landmark size={12} />
                </span>
                <span className="min-w-0 truncate text-xs font-semibold text-fg/80 sm:text-sm">Rajasthan SET</span>
                <span className="hidden shrink-0 bg-fg/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-fg/50 sm:block">
                  Upcoming
                </span>
              </div>
            </div>
          </div>

          {/* ── Desktop updates panel (RIGHT) ── */}
          <aside className="hidden w-64 shrink-0 flex-col border-l border-edge px-5 py-16 lg:flex xl:w-72 xl:px-6">
            <div className="sticky top-24">

              {/* Header with View All */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center gradient-brand text-white">
                    <Zap size={10} fill="currentColor" />
                  </span>
                  <p className="eyebrow text-[11px]">New Updates</p>
                </div>
                <Link
                  to="/updates"
                  className="font-mono text-[10px] uppercase tracking-wider text-brand hover:underline"
                >
                  View All →
                </Link>
              </div>

              {/* Clickable update items */}
              <div className="mt-4 space-y-3">
                {UPDATES.map((update) =>
                  update.href ? (
                    <Link
                      key={update.id}
                      to={update.href}
                      className="group flex gap-2.5"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-2" />
                      <p className="text-sm leading-relaxed text-muted transition-colors group-hover:text-fg">
                        {update.text}
                      </p>
                    </Link>
                  ) : (
                    <Link
                      key={update.id}
                      to="/updates"
                      className="group flex gap-2.5"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-2" />
                      <p className="text-sm leading-relaxed text-muted transition-colors group-hover:text-fg">
                        {update.text}
                      </p>
                    </Link>
                  )
                )}
              </div>

              {/* View all link at bottom */}
              <Link
                to="/updates"
                className="mt-5 flex items-center gap-1.5 border border-edge bg-card px-3 py-2 text-xs font-medium text-muted transition-colors hover:text-fg"
              >
                <Zap size={10} className="text-brand-2" />
                See all announcements →
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
