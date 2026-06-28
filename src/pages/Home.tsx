import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import Hero from "../components/Hero";
import QuickAccess from "../components/QuickAccess";
import MaterialsBrowser from "../components/MaterialsBrowser";
import About from "../components/About";
import Toast from "../components/Toast";
import { UPDATES } from "../data/updates";

const tickerText = UPDATES.map((u) => u.text).join("   ·   ");

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
      {/* Mobile updates ticker — sticky below header, clickable, hidden on lg+ */}
      <Link
        to="/updates"
        className="sticky top-16 z-30 block overflow-hidden border-b border-edge bg-band/95 backdrop-blur-sm lg:hidden"
      >
        <div className="flex items-center gap-3 px-4 py-2">
          <span className="inline-flex shrink-0 items-center gap-1 bg-brand px-2 py-[5px] font-mono text-[9px] font-bold uppercase tracking-widest text-white">
            <Zap size={8} fill="currentColor" />
            Updates
          </span>
          <div className="overflow-hidden flex-1">
            <p className="animate-marquee whitespace-nowrap text-[11px] text-muted">
              {tickerText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tickerText}
            </p>
          </div>
          <span className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-brand">
            View All →
          </span>
        </div>
      </Link>

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
