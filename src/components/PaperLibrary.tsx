import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { ResSection } from "../data/resources";
import UnitAccordion from "./UnitAccordion";
import Reveal from "./Reveal";

/**
 * Shared layout for the Paper 1 and Paper 2 pages.
 * Renders the back link, heading, and a list of collapsible Units.
 */
export default function PaperLibrary({
  eyebrow,
  title,
  subtitle,
  sections,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  sections: ResSection[];
}) {
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
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-1 text-sm text-muted">{subtitle}</p>
      </div>

      <Reveal>
        <div className="flex flex-col gap-3">
          {sections.map((section) => (
            <UnitAccordion key={section.title} section={section} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
