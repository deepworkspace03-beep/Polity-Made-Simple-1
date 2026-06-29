import { Link } from "react-router-dom";
import {
  GraduationCap,
  Languages,
  BookOpen,
  Landmark,
  Zap,
  ClipboardList,
} from "lucide-react";
import { SITE } from "../config";
import { UPDATES } from "../data/updates";
import UpdateLink from "./UpdateLink";
import SyllabusChip from "./SyllabusChip";

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

      {/* Vertically-centered content fills the first screen; a two-column
          grid on desktop aligns the updates panel with the exam card. */}
      <div className="relative mx-auto flex min-h-[calc(100svh-124px)] max-w-6xl flex-col justify-center px-4 py-8 sm:px-6 lg:min-h-[calc(100svh-68px)] lg:py-10">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-x-10 lg:gap-y-10">

          {/* ── Heading block (desktop: col 1 / row 1) ── */}
          <div className="text-center lg:col-start-1 lg:row-start-1">
            {/* Eyebrow */}
            <span className="anim-hero eyebrow inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
              {SITE.initiative}
            </span>

            {/* Heading */}
            <h1 className="anim-hero anim-d1 mt-3 text-[2rem] font-extrabold leading-[1.05] tracking-tight sm:mt-4 sm:text-6xl sm:leading-[1.08] lg:text-[4.25rem]">
              Political Science{" "}
              <span className="text-gradient">Made Simple</span>
            </h1>

            {/* Subtitle */}
            <p className="anim-hero anim-d2 mx-auto mt-3 max-w-lg text-[13px] text-muted sm:mt-4 sm:text-base">
              <span className="sm:hidden">
                Notes, PYQs, mock tests &amp; strategy — all in one place.
              </span>
              <span className="hidden sm:inline">
                Notes, PYQs, mock tests, current affairs and exam strategy —{" "}
                <br className="hidden sm:block" />
                everything you need, in one clean place.
              </span>
            </p>
          </div>

          {/* ── Exam card + upcoming chips (desktop: col 1 / row 2) ── */}
          <div className="mt-9 sm:mt-11 lg:col-start-1 lg:row-start-2 lg:mt-0">
            <div className="mx-auto w-full max-w-lg">

              {/* Grouped exam card: exam tag · Hindi · Papers · Mock series */}
              <div className="anim-hero anim-d3 rounded-2xl border border-edge bg-card/60 p-3 shadow-sm backdrop-blur-sm sm:p-4">

                {/* Exam tag + Hindi availability */}
                <div className="flex flex-col items-center gap-2">
                  <span className="inline-flex items-center gap-2.5 rounded-xl border border-edge bg-card px-4 py-1.5 shadow-sm">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg gradient-brand text-white">
                      <GraduationCap size={15} />
                    </span>
                    <span className="text-sm font-bold text-fg sm:text-[15px]">
                      {SITE.examLabel}
                    </span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-2/35 bg-brand-2/10 px-3 py-1 text-[12px] font-semibold text-fg sm:text-[13px]">
                    <Languages size={13} className="text-brand-2" />
                    Also available in{" "}
                    <span className="font-bold text-brand-2">हिंदी</span>
                  </span>
                </div>

                {/* Paper cards — whole card links; a Syllabus chip sits in the corner */}
                <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-3">

                  {/* Paper 1 */}
                  <div className="hero-card hero-card-p1 card relative flex flex-col bg-bg p-3 text-left sm:p-4">
                    <Link
                      to="/paper-1"
                      aria-label="Open Paper 1 — General materials"
                      className="absolute inset-0"
                    />
                    <div className="flex items-center justify-between gap-1.5">
                      <span className="eyebrow shrink-0 whitespace-nowrap text-[9px] tracking-[0.12em] sm:text-[10px]">Paper 1</span>
                      <SyllabusChip paper="paper1" label="Paper 1" />
                    </div>
                    <h3 className="mt-1.5 text-[15px] font-extrabold sm:mt-2 sm:text-lg">
                      General
                    </h3>
                    <ul className="mt-2 flex-1 space-y-1 sm:space-y-2">
                      {PAPER_1_TOPICS.map((t) => (
                        <li
                          key={t}
                          className="flex items-start gap-1.5 text-[10px] leading-snug text-muted sm:text-[13px]"
                        >
                          <span className="mt-[4px] h-1 w-1 shrink-0 rounded-full bg-brand sm:mt-[5px] sm:h-1.5 sm:w-1.5" />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span
                      className="mt-2.5 flex items-center justify-center rounded-lg py-2 text-[11px] font-semibold text-white sm:text-sm"
                      style={{ backgroundColor: "rgb(var(--blue))" }}
                    >
                      Open &rsaquo;
                    </span>
                  </div>

                  {/* Paper 2 */}
                  <div className="hero-card hero-card-p2 card relative flex flex-col bg-bg p-3 text-left sm:p-4">
                    <Link
                      to="/paper-2"
                      aria-label="Open Paper 2 — Political Science materials"
                      className="absolute inset-0"
                    />
                    <div className="flex items-center justify-between gap-1.5">
                      <span className="eyebrow shrink-0 whitespace-nowrap text-[9px] tracking-[0.12em] sm:text-[10px]">Paper 2</span>
                      <SyllabusChip paper="paper2" label="Paper 2" />
                    </div>
                    <h3 className="mt-1.5 text-[15px] font-extrabold sm:mt-2 sm:text-lg">
                      Political Science
                    </h3>
                    <ul className="mt-2 flex-1 space-y-1 sm:space-y-2">
                      {PAPER_2_TOPICS.map((t) => (
                        <li
                          key={t}
                          className="flex items-start gap-1.5 text-[10px] leading-snug text-muted sm:text-[13px]"
                        >
                          <span className="mt-[4px] h-1 w-1 shrink-0 rounded-full bg-brand-2 sm:mt-[5px] sm:h-1.5 sm:w-1.5" />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span
                      className="mt-2.5 flex items-center justify-center rounded-lg py-2 text-[11px] font-semibold text-white sm:text-sm"
                      style={{ backgroundColor: "rgb(var(--green))" }}
                    >
                      Open &rsaquo;
                    </span>
                  </div>
                </div>

                {/* Mock tests — slim full-width call to action */}
                <Link
                  to="/mock-tests"
                  className="group mt-2.5 flex w-full items-center justify-center gap-2 rounded-lg gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform active:scale-[0.98] sm:mt-3 sm:py-2.5"
                >
                  <ClipboardList size={15} />
                  Mock Test Series 2026
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>

              {/* ── Upcoming exams ── */}
              <div className="anim-hero anim-d4 mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3">
                <div className="hero-chip hero-chip-cuet flex min-w-0 items-center gap-1.5 rounded-lg border border-edge bg-card px-2.5 py-2 sm:gap-2.5 sm:px-4 sm:py-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-2/15 text-brand-2 sm:h-7 sm:w-7">
                    <BookOpen size={12} />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-[11px] font-semibold text-fg/80 sm:text-sm">CUET-PG</span>
                  <span className="hidden shrink-0 rounded bg-fg/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-fg/50 sm:inline-block">
                    Upcoming
                  </span>
                </div>
                <div className="hero-chip hero-chip-rset flex min-w-0 items-center gap-1.5 rounded-lg border border-edge bg-card px-2.5 py-2 sm:gap-2.5 sm:px-4 sm:py-3">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md sm:h-7 sm:w-7"
                    style={{ backgroundColor: "rgb(245 158 11 / 0.12)", color: "rgb(217 119 6)" }}
                  >
                    <Landmark size={12} />
                  </span>
                  {/* Responsive label: "SET Rajasthan" on mobile, "Rajasthan SET" on ≥sm */}
                  <span className="min-w-0 flex-1 truncate text-[11px] font-semibold text-fg/80 sm:text-sm">
                    <span className="sm:hidden">SET Rajasthan</span>
                    <span className="hidden sm:inline">Rajasthan SET</span>
                  </span>
                  <span className="hidden shrink-0 rounded bg-fg/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-fg/50 sm:inline-block">
                    Upcoming
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Desktop updates panel (col 2 / row 2) — premium card that
              aligns with the exam card and runs to the chips' level ── */}
          <aside className="hidden lg:col-start-2 lg:row-start-2 lg:block">
            <div className="anim-hero anim-d4 flex h-full flex-col rounded-2xl border border-edge bg-card/70 p-5 shadow-[var(--shadow-card)] backdrop-blur-sm">

              {/* Header with View All */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md gradient-brand text-white">
                    <Zap size={10} fill="currentColor" />
                  </span>
                  <p className="eyebrow text-[11px]">Latest Updates</p>
                </div>
                <Link
                  to="/updates"
                  className="font-mono text-[10px] uppercase tracking-wider text-brand hover:underline"
                >
                  View All →
                </Link>
              </div>

              {/* Divider */}
              <span className="mt-3 block h-px bg-edge" />

              {/* All updates — fill the available height, each clickable */}
              <div className="mt-2 flex-1 space-y-0.5 overflow-y-auto pr-0.5">
                {UPDATES.map((update) => (
                  <UpdateLink
                    key={update.id}
                    update={update}
                    className="group flex items-center gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-fg/[0.04]"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-2 transition-transform group-hover:scale-125" />
                    <span className="min-w-0 flex-1 truncate text-xs text-muted transition-colors group-hover:text-fg">
                      {update.short ?? update.text}
                    </span>
                    {update.isNew && (
                      <span className="shrink-0 rounded bg-brand-2 px-1 py-px text-[8px] font-bold uppercase text-white">
                        New
                      </span>
                    )}
                  </UpdateLink>
                ))}
              </div>

              {/* See all — pinned to the bottom of the panel */}
              <Link
                to="/updates"
                className="mt-2 flex items-center justify-center gap-1.5 border-t border-edge pt-3 text-[11px] font-medium text-muted transition-colors hover:text-fg"
              >
                <Zap size={9} className="text-brand-2" />
                See all announcements →
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
