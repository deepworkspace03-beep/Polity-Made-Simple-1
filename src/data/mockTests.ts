// ───────────────────────────────────────────────────────────────
//  MOCK TEST SERIES
//  Each test's `url` opens the online test in a new tab.
//  To add a test: add a { title, paper, questions, url } to a day,
//  or add a new day object.
// ───────────────────────────────────────────────────────────────

export type MockTest = {
  title: string;
  paper: "Paper 1" | "Paper 2" | "Full";
  questions?: string; // e.g. "50 Q"
  url: string;
};

export type MockDay = {
  date: string;
  tests: MockTest[];
};

// 10-Day Unit-wise Mock Test Series — UGC-NET/JRF June 2026.
export const mockDays: MockDay[] = [
  {
    date: "13 June",
    tests: [
      { title: "Unit 5 – International Relations", paper: "Paper 2", questions: "100 Q", url: "https://jrfclub-day-1-unit-5-ir.netlify.app/" },
    ],
  },
  {
    date: "14 June",
    tests: [
      { title: "Unit 7 – Political Institutions in India", paper: "Paper 2", questions: "125 Q", url: "https://jrfclub-day2-unit-7-indian-polity.netlify.app/" },
    ],
  },
  {
    date: "15 June",
    tests: [
      { title: "Unit 7 – Political Institutions (Part 2)", paper: "Paper 2", questions: "50 Q", url: "https://jrfclub-day3-unit7-polity-part-2.netlify.app/" },
    ],
  },
  {
    date: "16 June",
    tests: [
      { title: "Unit 4 – Comparative Political Analysis", paper: "Paper 2", questions: "50 Q", url: "https://jrfclub-day4-unit4-comparative-politi.netlify.app/" },
    ],
  },
  {
    date: "17 June",
    tests: [
      { title: "Paper 1", paper: "Paper 1", questions: "50 Q", url: "https://jrfclub-day-5-paper-1.netlify.app/" },
      { title: "Unit 6 – India's Foreign Policy", paper: "Paper 2", questions: "50 Q", url: "https://jrfclub-day5-unit-6-indias-foreign-po.netlify.app/" },
    ],
  },
  {
    date: "18 June",
    tests: [
      { title: "Paper 1", paper: "Paper 1", questions: "50 Q", url: "https://jrfclub-day6-paper-1.netlify.app/" },
      { title: "Unit 1 – Political Theory", paper: "Paper 2", questions: "50 Q", url: "https://jrfclub-day6-unit1-political-theory.netlify.app/" },
    ],
  },
  {
    date: "19 June",
    tests: [
      { title: "Paper 1", paper: "Paper 1", questions: "50 Q", url: "https://jrfclub-day7-paper-1.netlify.app/" },
      { title: "Unit 2 – Western Political Thought", paper: "Paper 2", questions: "50 Q", url: "https://jrfclub-day7-unit2-political-thought.netlify.app/" },
    ],
  },
  {
    date: "20 June",
    tests: [
      { title: "Paper 1 (Full)", paper: "Paper 1", questions: "50 Q", url: "https://jrfclub-day8-paper-1.netlify.app/" },
      { title: "Unit 3 – Indian Political Thought", paper: "Paper 2", questions: "50 Q", url: "https://jrfclub-day8-unit3-indian-pol-thinker.netlify.app/" },
      { title: "Unit 8 – Political Processes in India", paper: "Paper 2", questions: "50 Q", url: "https://jrfclub-day8-unit8-political-process.netlify.app/" },
    ],
  },
  {
    date: "21 June",
    tests: [
      { title: "Paper 1", paper: "Paper 1", questions: "50 Q", url: "https://jrfclub-day9-paper-1.netlify.app/" },
      { title: "Unit 9 – Public Administration", paper: "Paper 2", questions: "50 Q", url: "https://jrfclub-day9-unit9-pb-ad.netlify.app/" },
      { title: "Unit 10 – Governance & Public Policy", paper: "Paper 2", questions: "50 Q", url: "https://jrfclub-day9-unit10-governance.netlify.app/" },
    ],
  },
  {
    date: "22 June",
    tests: [
      { title: "Final Mega Mock Test (Full Paper)", paper: "Full", questions: "150 Q", url: "https://jrfclub-day10-final-mega-test.netlify.app/" },
    ],
  },
];
