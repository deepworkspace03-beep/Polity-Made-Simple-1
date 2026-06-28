// ───────────────────────────────────────────────────────────────
//  QUICK ACCESS CARDS (six tiles below the hero)
//  Each tile has an `action`:
//   • { kind: "filter", type } → filters the materials section below
//   • { kind: "route", to }    → opens another page
//   • { kind: "soon" }         → shows a "coming soon" note
// ───────────────────────────────────────────────────────────────
import {
  Printer,
  PenLine,
  FileCheck,
  ClipboardList,
  Newspaper,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export type QuickAction =
  | { kind: "filter"; type: string }
  | { kind: "route"; to: string }
  | { kind: "soon" };

export type QuickAccessItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  action: QuickAction;
};

export const quickAccess: QuickAccessItem[] = [
  {
    title: "Printed Notes",
    description: "Clean, structured material",
    icon: Printer,
    action: { kind: "filter", type: "Printed Notes" },
  },
  {
    title: "Handwritten Notes",
    description: "Concise, exam-ready notes",
    icon: PenLine,
    action: { kind: "filter", type: "Handwritten Notes" },
  },
  {
    title: "Detailed PYQ Solutions",
    description: "Past papers with answers",
    icon: FileCheck,
    action: { kind: "filter", type: "Detailed PYQ Solutions" },
  },
  {
    title: "Mock Tests",
    description: "Unit-wise & full length",
    icon: ClipboardList,
    action: { kind: "route", to: "/mock-tests" },
  },
  {
    title: "Current Affairs",
    description: "Updated regularly",
    icon: Newspaper,
    action: { kind: "soon" },
  },
  {
    title: "Exam Updates & Strategy",
    description: "News & smart prep",
    icon: Megaphone,
    action: { kind: "soon" },
  },
];
