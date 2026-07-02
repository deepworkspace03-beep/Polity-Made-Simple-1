import { Link } from "react-router-dom";
import {
  Languages,
  BookOpen,
  Landmark,
  Zap,
  ClipboardList,
  Sparkles,
  CalendarClock,
} from "lucide-react";
import { SITE } from "../config";
import { UPDATES } from "../data/updates";
import UpdateLink from "./UpdateLink";
import SyllabusChip from "./SyllabusChip";

const PAPER_1_TOPICS = ["Teaching Aptitude", "Research Methodology", "ICT & Reasoning"];
const PAPER_2_TOPICS = ["Political Theory", "Indian Government", "International Relations"];

// Split "UGC NET JRF · December 2026" so the session gets the gradient accent.
// If the "·" is ever removed from config, the whole label renders plainly.
const [EXAM_NAME, EXAM_SESSION] = SITE.examLabel.split("·").map((s) => s.trim());

// Short session for small screens: "December 2026" → "Dec 2026", keeping the
// heading on a single line even on narrow phones.
const EXAM_SESSION_SHORT = EXAM_SESSION?.replace(/^([A-Za-z]{3})[A-Za-z]*/, "$1");

/**
 * Muted "Upcoming" status pill — filled with the page background so it blends
 * into the theme (light & dark), a hairline border for definition and a small
 * teal accent dot so it reads as a status without any loud colour.
 */
function UpcomingBadge() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-edge bg-bg px-1.5 py-0.5 font-mono text-[7px] font-bold uppercase tracking-wide text-muted sm:text-[8px]">
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand-2/70" />
      Upcoming
    </span>
  );
}

export default function Hero({
  onComingSoon,
}: {
  onComingSoon: (message: string) => void;
}) {
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

      {/* Vertically-centered content fills the first screen. */}
      <div className="relative mx-auto flex min-h-[calc(100svh-124px)] max-w-6xl flex-col justify-center px-4 py-8 sm:px-6 lg:min-h-[calc(100svh-68px)] lg:py-10">

        {/* ── Heading block — full width; a single line on desktop so the
            top of the hero reads as one balanced, symmetrical banner ── */}
        <div className="text-center">
          {/* Eyebrow */}
          <span className="anim-hero eyebrow inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
            {SITE.initiative}
          </span>

          {/* Heading — wraps naturally on mobile, one line on desktop */}
          <h1 className="anim-hero anim-d1 mt-3 text-[2rem] font-extrabold leading-[1.05] tracking-tight sm:mt-4 sm:text-6xl sm:leading-[1.08] lg:whitespace-nowrap lg:text-[3.25rem] xl:text-[3.75rem]">
            Political Science{" "}
            <span className="text-gradient">Made Simple</span>
          </h1>

          {/* Subtitle — one compact line on desktop */}
          <p className="anim-hero anim-d2 mx-auto mt-3 max-w-lg text-[13px] text-muted sm:mt-4 sm:text-base lg:max-w-none">
            <span className="sm:hidden">
              Notes, PYQs, mock tests &amp; strategy — all in one place.
            </span>
            <span className="hidden sm:inline">
              Notes, PYQs, mock tests, current affairs and exam strategy —
              everything you need, in one clean place.
            </span>
          </p>
        </div>

        {/* ── Two-column body: exam block (left) · updates + upcoming (right) ── */}
        <div className="mt-9 sm:mt-11 lg:mt-10 lg:grid lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-stretch lg:gap-8 xl:grid-cols-[minmax(0,1fr)_20rem] xl:gap-10">

          {/* ── LEFT — primary exam card + (mobile-only) upcoming chips ── */}
          <div className="lg:flex lg:flex-col lg:justify-center">
            <div className="mx-auto w-full max-w-lg lg:max-w-2xl">

              {/* Material updates badge — sits half-over the top edge of the exam card */}
              <div className="anim-hero anim-d2 relative z-10 mb-[-14px] flex justify-center sm:mb-[-16px]">
                <span className="inline-flex items-center gap-1.5 rounded-full gradient-brand px-4 py-1.5 text-[11px] font-semibold text-white shadow-sm sm:text-xs">
                  <Sparkles size={13} />
                  Material Updates Every Week
                </span>
              </div>

              {/* Grouped exam card: primary heading · Hindi · Papers · Mock series */}
              <div className="anim-hero anim-d3 rounded-2xl border border-edge bg-card/60 px-3 pb-3 pt-6 shadow-sm backdrop-blur-sm sm:px-4 sm:pb-4 sm:pt-7 lg:px-6 lg:pb-6 lg:pt-8">

                {/* Primary exam heading — the clear focal point of the hero.
                    Always a single line; the month abbreviates on phones. */}
                <div className="flex flex-col items-center gap-2.5 sm:gap-3">
                  <h2 className="whitespace-nowrap text-center text-2xl font-extrabold leading-none tracking-tight sm:text-3xl lg:text-4xl xl:text-[2.4rem]">
                    {EXAM_NAME}
                    {EXAM_SESSION && (
                      <>
                        {" "}
                        <span className="text-gradient">
                          <span className="sm:hidden">{EXAM_SESSION_SHORT}</span>
                          <span className="hidden sm:inline">{EXAM_SESSION}</span>
                        </span>
                      </>
                    )}
                  </h2>

                  {/* Slim gradient accent underscoring the primary heading */}
                  <span
                    aria-hidden="true"
                    className="block h-[3px] w-20 rounded-full gradient-brand opacity-80 sm:w-24"
                  />

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-2/35 bg-brand-2/10 px-3 py-1 text-[12px] font-semibold text-fg sm:text-[13px]">
                    <Languages size={13} className="text-brand-2" />
                    Also available in{" "}
                    <span className="font-bold text-brand-2">हिंदी</span>
                  </span>
                </div>

                {/* Paper cards — whole card links; a Syllabus chip sits in the corner */}
                <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-3 lg:mt-5 lg:gap-4">

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

              {/* ── Upcoming exams — mobile/tablet only; on desktop these live
                  in the right-hand column instead ── */}
              <div className="anim-hero anim-d4 mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3 lg:hidden">
                <button
                  type="button"
                  onClick={() => onComingSoon("CUET-PG materials — coming soon. Stay tuned!")}
                  className="hero-chip hero-chip-cuet flex min-w-0 items-center gap-1.5 rounded-lg border border-edge bg-card px-2.5 py-2 text-left transition-colors hover:bg-fg/[0.04] active:scale-[0.98] sm:gap-2.5 sm:px-4 sm:py-3"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-2/15 text-brand-2 sm:h-7 sm:w-7">
                    <BookOpen size={12} />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-[11px] font-semibold text-fg/80 sm:text-sm">CUET-PG</span>
                  <UpcomingBadge />
                </button>
                <button
                  type="button"
                  onClick={() => onComingSoon("Rajasthan SET materials — coming soon. Stay tuned!")}
                  className="hero-chip hero-chip-rset flex min-w-0 items-center gap-1.5 rounded-lg border border-edge bg-card px-2.5 py-2 text-left transition-colors hover:bg-fg/[0.04] active:scale-[0.98] sm:gap-2.5 sm:px-4 sm:py-3"
                >
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md sm:h-7 sm:w-7"
                    style={{ backgroundColor: "rgb(245 158 11 / 0.12)", color: "rgb(217 119 6)" }}
                  >
                    <Landmark size={12} />
                  </span>
                  {/* Responsive label: "SET (Raj.)" on mobile, "Rajasthan SET" on ≥sm */}
                  <span className="min-w-0 flex-1 truncate text-[11px] font-semibold text-fg/80 sm:text-sm">
                    <span className="sm:hidden">SET (Raj.)</span>
                    <span className="hidden sm:inline">Rajasthan SET</span>
                  </span>
                  <UpcomingBadge />
                </button>
              </div>
            </div>
          </div>

          {/* ── RIGHT — updates panel on top, upcoming exams below. The inner
              wrapper is absolutely positioned so the column never adds height:
              its height always matches the exam card, and a long updates list
              scrolls inside its own panel instead of stretching the layout ── */}
          <aside className="relative hidden lg:block">
            <div className="absolute inset-0 flex flex-col gap-4">

            {/* Latest updates — stretches to keep the column height balanced */}
            <div className="anim-hero anim-d4 flex min-h-0 w-full flex-1 flex-col rounded-2xl border border-edge bg-card/70 px-5 py-6 shadow-[var(--shadow-card)] backdrop-blur-sm">

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
              <span className="mt-4 block h-px bg-edge" />

              {/* All updates — listed from the top, each clickable; scrolls
                  within the panel when the list outgrows it (the header's
                  "View All" covers navigation, so no extra footer link) */}
              <div className="mt-3 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overscroll-contain pr-0.5">
                {UPDATES.map((update) => (
                  <UpdateLink
                    key={update.id}
                    update={update}
                    className="group flex items-center gap-2.5 rounded-lg px-2 py-2.5 transition-colors hover:bg-fg/[0.04]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 self-start rounded-full bg-brand-2 transition-transform group-hover:scale-125" />
                    <span className="min-w-0 flex-1 text-[13px] leading-snug text-muted transition-colors group-hover:text-fg">
                      {update.short ?? update.text}
                    </span>
                    {update.isNew && (
                      <span className="shrink-0 rounded bg-red-500/15 px-1.5 py-px text-[8px] font-bold uppercase text-red-500">
                        New
                      </span>
                    )}
                  </UpdateLink>
                ))}
              </div>
            </div>

            {/* Upcoming exams — compact stacked cards with status pills */}
            <div className="anim-hero anim-d5 shrink-0 rounded-2xl border border-edge bg-card/70 px-5 py-4 shadow-[var(--shadow-card)] backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-2/15 text-brand-2">
                  <CalendarClock size={11} />
                </span>
                <p className="eyebrow text-[11px]">Also Preparing For</p>
              </div>

              <span className="mt-3 block h-px bg-edge" />

              <div className="mt-3 space-y-2">
                <button
                  type="button"
                  onClick={() => onComingSoon("CUET-PG materials — coming soon. Stay tuned!")}
                  className="hero-chip hero-chip-cuet flex w-full items-center gap-2.5 rounded-xl border border-edge bg-bg/60 px-3 py-2.5 text-left"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-2/15 text-brand-2">
                    <BookOpen size={15} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13px] font-bold text-fg">CUET-PG</span>
                    <span className="block truncate text-[10px] text-muted">PG entrance exam</span>
                  </span>
                  <UpcomingBadge />
                </button>

                <button
                  type="button"
                  onClick={() => onComingSoon("Rajasthan SET materials — coming soon. Stay tuned!")}
                  className="hero-chip hero-chip-rset flex w-full items-center gap-2.5 rounded-xl border border-edge bg-bg/60 px-3 py-2.5 text-left"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "rgb(245 158 11 / 0.12)", color: "rgb(217 119 6)" }}
                  >
                    <Landmark size={15} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13px] font-bold text-fg">Rajasthan SET</span>
                    <span className="block truncate text-[10px] text-muted">State Eligibility Test</span>
                  </span>
                  <UpcomingBadge />
                </button>
              </div>
            </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
