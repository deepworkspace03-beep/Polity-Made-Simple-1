// Shared types for the Paper 1 / Paper 2 resource libraries.
// (The data itself is in paper1.ts and paper2.ts.)

export type ResFile = {
  name: string; // shown on the button
  url: string; // opens the Google Drive PDF in a new tab
};

export type ResCategory = {
  label: string; // e.g. "Handwritten Notes", "Printed Notes", "PYQs"
  files: ResFile[];
};

export type ResSection = {
  title: string; // Unit name (or "Syllabus" / "Previous Year Papers")
  categories: ResCategory[]; // empty array => "Resources will be uploaded soon."
};
