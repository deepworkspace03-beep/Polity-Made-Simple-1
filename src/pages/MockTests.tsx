import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, CalendarDays } from "lucide-react";
import { mockDays, type MockTest } from "../data/mockTests";
import Reveal from "../components/Reveal";

// Small coloured badge for the paper a test belongs to.
function PaperBadge({ paper }: { paper: MockTest["paper"] }) {
  const styles = {
    "Paper 1": "bg-brand/10 text-brand",
    "Paper 2": "bg-brand-2/10 text-brand-2",
    Full: "gradient-brand text-white",
  };
  return (
    <span className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${styles[paper]}`}>
      {paper}
    </span>
  );
}

/**
 * Mock Tests page. Data comes from src/data/mockTests.ts.
 * Each test opens its online test in a new tab.
 */
export default function MockTests() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-brand"
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>

      <div className="mt-4 mb-6">
        <p className="eyebrow">Mock Tests</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight">
          Mock Test Series
        </h1>
        <p className="mt-1 text-sm text-muted">
          10-Day unit-wise series for UGC-NET/JRF · Free, no registration.
          English &amp; Hindi, with detailed solutions.
        </p>
      </div>

      <Reveal>
        <div className="flex flex-col gap-4">
          {mockDays.map((day) => (
            <div key={day.date} className="card p-4">
              {/* day header */}
              <div className="mb-3 flex items-center gap-2">
                <CalendarDays size={15} className="text-brand" />
                <span className="text-sm font-bold">{day.date}</span>
              </div>

              {/* tests for the day */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {day.tests.map((test) => (
                  <a
                    key={test.url}
                    href={test.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-2 rounded-lg border border-edge bg-bg px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-brand/40"
                  >
                    <span className="min-w-0">
                      <span className="flex items-center gap-2">
                        <PaperBadge paper={test.paper} />
                        {test.questions && (
                          <span className="font-mono text-[10px] text-muted">
                            {test.questions}
                          </span>
                        )}
                      </span>
                      <span className="mt-1 block text-sm font-semibold">
                        {test.title}
                      </span>
                    </span>
                    <ExternalLink
                      size={15}
                      className="shrink-0 text-muted transition-colors group-hover:text-brand"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
