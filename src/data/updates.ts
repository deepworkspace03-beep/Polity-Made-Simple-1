// ────────────────────────────────────────────────────────────────────────────
//  UPDATES — this is the ONLY file you need to edit to add/change announcements.
//
//  HOW TO ADD A NEW UPDATE (no coding knowledge needed):
//
//  1. Find the UPDATES list below (starts after this comment block).
//  2. Copy this line exactly:
//       { id: 7, text: "Your announcement here", date: "Jul 2026" },
//     Paste it at the TOP of the list (right after the opening "[" bracket).
//  3. Change the id number (make it 1 higher than the current highest).
//  4. Change the text to your announcement.
//  5. Change the date (e.g. "Jun 2026", "Jul 2026").
//
//  HOW TO LINK AN UPDATE TO A PAGE:
//    Add   href: "/paper-2"   inside the { }. For example:
//    { id: 7, text: "New notes added", href: "/paper-2", date: "Jul 2026" },
//    Pages you can link to:  "/paper-1"  "/paper-2"  "/mock-tests"  "/updates"
//
//  HOW TO ADD A GOOGLE DRIVE LINK:
//    Add   driveUrl: "https://drive.google.com/..."   inside the { }.
//
//  HOW TO ADD A "NEW" BADGE:
//    Add   isNew: true   inside the { }.
//
//  HOW TO REMOVE AN UPDATE:
//    Delete the entire line for that update (the { ... }, line).
//
//  Save the file after editing. That's it!
// ────────────────────────────────────────────────────────────────────────────

export type Update = {
  id: number;
  text: string;
  short?: string; // optional — short single-line title for compact lists
  href?: string;  // optional — page to open when clicked
  driveUrl?: string; // optional — Google Drive link
  isNew?: boolean; // optional — show NEW badge
  date?: string;  // optional — display date e.g. "Jun 2026"
};

export const UPDATES: Update[] = [
  {
    id: 1,
    text: "UGC-NET Pol Sc Memory Recall June-2026",
    driveUrl: "https://drive.google.com/file/d/1XqhoJPCnLYjSwIhqplGfoLzYyC_-qaES/view?usp=drivesdk",
    isNew: true,
  },
  {
    id: 2,
    text: "More updates coming soon.",
  },
];
