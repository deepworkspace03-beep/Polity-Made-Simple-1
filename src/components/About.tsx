import { Mail } from "lucide-react";
import { SITE } from "../config";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-edge bg-bg">
      <Reveal>
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">

          <p className="eyebrow">About Us</p>

          {/* Avatar — circle is intentional for person avatar */}
          <div className="relative mx-auto mt-4 h-20 w-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-brand/25 blur-xl"
            />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full gradient-brand text-xl font-extrabold text-white ring-4 ring-bg">
              D
            </div>
          </div>

          {/* Bio */}
          <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-muted sm:text-sm">
            The author has qualified UGC-NET/JRF in Political Science (99.826 percentile, June 2025),
            along with GATE in Economics and UGC-NET in Geography. With years of first-hand exam
            experience and mentoring, the focus is on providing quality notes, mock tests, and
            detailed PYQs — all in one place to make preparation simpler, smarter, and effective.
          </p>

          {/* Email contact */}
          <a
            href={`mailto:${SITE.email}`}
            className="mt-5 inline-flex items-center gap-2 border border-edge bg-card px-3 py-2 text-xs transition-all hover:border-brand/40 hover:shadow-sm"
          >
            <Mail size={12} className="shrink-0 text-brand" />
            <span className="hidden text-[10px] text-muted sm:inline">Questions or feedback?</span>
            <span className="text-xs font-semibold text-fg">{SITE.email}</span>
          </a>

        </div>
      </Reveal>
    </section>
  );
}
