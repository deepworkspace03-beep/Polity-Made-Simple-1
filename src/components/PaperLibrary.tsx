import type { ResSection } from "../data/resources";
import UnitAccordion from "./UnitAccordion";
import PageHeader from "./PageHeader";
import Reveal from "./Reveal";

/**
 * Shared layout for the Paper 1 and Paper 2 pages.
 * Renders the breadcrumb, heading, and a list of collapsible Units.
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
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
      <PageHeader crumb={eyebrow} eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <Reveal className="mt-7">
        <div className="flex flex-col gap-3">
          {sections.map((section) => (
            <UnitAccordion key={section.title} section={section} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
