import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import Hero from "../components/Hero";
import QuickAccess from "../components/QuickAccess";
import MaterialsBrowser from "../components/MaterialsBrowser";
import About from "../components/About";
import Toast from "../components/Toast";
import { UPDATES, isUpdateNew } from "../data/updates";
import NewBadge from "../components/NewBadge";

// The 3 most recent updates, shown in the compact mobile box.
const RECENT_UPDATES = UPDATES.slice(0, 3);

export default function Home() {
  const [types, setTypes] = useState<string[]>([]);
  const [papers, setPapers] = useState<string[]>([]);
  const [langs, setLangs] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(id);
  }, [toast]);

  const handlePick = (type: string) => {
    setTypes([type]);
    setPapers([]);
    setLangs([]);
    setTimeout(
      () =>
        document
          .getElementById("materials")
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      0
    );
  };

  return (
    <>
      {/* Mobile latest-updates box — fixed (non-scrolling), readable, hidden on lg+ */}
      <section className="border-b border-edge bg-band lg:hidden">
        <div className="mx-auto max-w-6xl px-4 py-3.5">
          {/* Header row */}
          <div className="mb-2.5 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-fg">
              <span className="flex h-5 w-5 items-center justify-center gradient-brand text-white">
                <Zap size={10} fill="currentColor" />
              </span>
              Latest Updates
            </span>
            <Link
              to="/updates"
              className="font-mono text-[10px] font-medium uppercase tracking-wider text-brand active:opacity-70"
            >
              View all →
            </Link>
          </div>

          {/* 2–3 most recent updates, each on its own line */}
          <ul className="space-y-2">
            {RECENT_UPDATES.map((u) => (
              <li key={u.id}>
                <Link
                  to={u.href ?? "/updates"}
                  className="flex items-start gap-2.5 py-0.5 active:opacity-70"
                >
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-2" />
                  <span className="min-w-0 flex-1 text-[13px] leading-snug text-fg/85 line-clamp-2">
                    {u.text}
                  </span>
                  {isUpdateNew(u) && <NewBadge className="mt-px" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Hero />
      <QuickAccess onPick={handlePick} onComingSoon={setToast} />
      <MaterialsBrowser
        types={types}
        papers={papers}
        langs={langs}
        setTypes={setTypes}
        setPapers={setPapers}
        setLangs={setLangs}
        onComingSoon={setToast}
      />
      <About />
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </>
  );
}
