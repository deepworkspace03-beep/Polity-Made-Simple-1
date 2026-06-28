import PaperLibrary from "../components/PaperLibrary";
import { paper1Sections } from "../data/paper1";

/**
 * Paper 1 — General Aptitude. All content comes from src/data/paper1.ts.
 */
export default function Paper1() {
  return (
    <PaperLibrary
      eyebrow="Paper 1"
      title="General Aptitude"
      subtitle="Common for all subjects. Tap a unit to see notes, PYQs and more."
      sections={paper1Sections}
    />
  );
}
