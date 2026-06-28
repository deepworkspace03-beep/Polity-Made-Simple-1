import PaperLibrary from "../components/PaperLibrary";
import { paper2Sections } from "../data/paper2";

/**
 * Paper 2 — Political Science. All content comes from src/data/paper2.ts.
 */
export default function Paper2() {
  return (
    <PaperLibrary
      eyebrow="Paper 2"
      title="Political Science"
      subtitle="All 10 units. Tap a unit to see notes, PYQs and more."
      sections={paper2Sections}
    />
  );
}
