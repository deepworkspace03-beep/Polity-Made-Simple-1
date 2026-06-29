// ───────────────────────────────────────────────────────────────
//  OFFICIAL SYLLABUS — single source of truth
//  Used by the hero Paper cards (the "Syllabus" language picker) AND
//  the Paper 1 / Paper 2 pages. Edit a link here once and it updates
//  everywhere — no duplication.
//
//  To change a link: Google Drive → Share → "Anyone with the link" →
//  Copy link → paste below.
// ───────────────────────────────────────────────────────────────

export type SyllabusPaper = "paper1" | "paper2";
export type SyllabusLang = "English" | "Hindi";

export const SYLLABUS: Record<SyllabusPaper, Record<SyllabusLang, string>> = {
  paper1: {
    English: "https://drive.google.com/file/d/1i-FXxVrf5sVqZmjYpt-NvcFTZF0dRW5O/view",
    Hindi: "https://drive.google.com/file/d/19th6k9r7KBEj1e2C45dDhgXUrsH2zINs/view",
  },
  paper2: {
    English: "https://drive.google.com/file/d/1jz3YLrr4hudvPTDGzI8r16H0Sn38802_/view",
    Hindi: "https://drive.google.com/file/d/1S4rAkjEuAbY0V5uThhJ_k6qpMpf_8AXM/view",
  },
};
