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
//  HOW THE RED "NEW" BADGE WORKS:
//    AUTOMATIC — add   publishedAt: "2026-06-28"   (a real YYYY-MM-DD date).
//    The badge shows on its own for 48 hours, then disappears automatically.
//    MANUAL    — add   isNew: true   to force the badge on (no auto-expiry).
//
//  HOW TO REMOVE AN UPDATE:
//    Delete the entire line for that update (the { ... }, line).
//
//  Save the file after editing. That's it!
// ────────────────────────────────────────────────────────────────────────────

export type Update = {
  id: number;
  text: string;
  href?: string;  // optional — page to open when clicked
  driveUrl?: string; // optional — Google Drive link
  publishedAt?: string; // optional — YYYY-MM-DD; auto-shows NEW badge for 48h
  isNew?: boolean; // optional — force NEW badge on (manual override)
  date?: string;  // optional — display date e.g. "Jun 2026"
};

// 48 hours in milliseconds.
const NEW_WINDOW_MS = 48 * 60 * 60 * 1000;

/**
 * Whether an update should show the red "NEW" badge.
 * Automatic when `publishedAt` falls within the last 48 hours;
 * `isNew: true` is a manual override that never expires.
 */
export function isUpdateNew(update: Update): boolean {
  if (update.publishedAt) {
    const published = new Date(update.publishedAt).getTime();
    if (!Number.isNaN(published)) {
      const age = Date.now() - published;
      return age >= 0 && age <= NEW_WINDOW_MS;
    }
  }
  return update.isNew === true;
}

export const UPDATES: Update[] = [
  {
    id: 6,
    text: "UGC-NET June-2026 Pol Sci memory recalled Paper",
    driveUrl: "https://drive.google.com/file/d/1BigZ06D3TwdQIo252ZhS3gPcM2mTFGeh/view?usp=drivesdk",
    publishedAt: "2026-06-28",
    date: "28 Jun 2026",
  },
  {
    id: 1,
    text: "New PYQ Solutions added for Political Theory — Unit 1 & 2",
    href: "/paper-2",
    date: "Jun 2026",
  },
  {
    id: 2,
    text: "Mock Test Series 3 is now live — attempt now",
    href: "/mock-tests",
    date: "Jun 2026",
  },
  {
    id: 3,
    text: "UGC NET Dec 2026 application dates expected in August",
    date: "Jun 2026",
  },
  {
    id: 4,
    text: "Handwritten notes for Indian Government now available",
    href: "/paper-2",
    date: "May 2026",
  },
  {
    id: 5,
    text: "Current Affairs section coming soon — stay tuned",
    date: "May 2026",
  },
];
