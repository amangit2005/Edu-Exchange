// ─────────────────────────────────────────────
// All study material data
// ─────────────────────────────────────────────
export const DATA = [
  {
    id: "m1",
    title: "Data Structures & Algorithms – Complete Notes",
    type: "Notes",
    emoji: "📘",
    course: "BCA – Semester 3",
    subject: "Data Structures",
    professor: "Dr. R. Sharma",
    topic: "Arrays, Trees, Graphs, Sorting",
    uploader: "Ekansh Mittal",
    uInit: "EM",
    hue: 239,
    rating: 4.8,
    reviews: 34,
    date: "2025-10-12",
    dl: 218,
    pages: 42,
    size: "3.2 MB",
    tags: ["DSA", "Trees", "Graphs", "Sorting"],
    desc: "Comprehensive handwritten + typed notes covering all major DSA topics. Includes solved examples, time-complexity cheat sheets, and exam tips from university papers.",
  },
  {
    id: "m2",
    title: "DBMS Previous Year Question Papers 2021–2024",
    type: "Exam Paper",
    emoji: "📝",
    course: "BCA – Semester 4",
    subject: "Database Management",
    professor: "Ms. Avantika Choudhary",
    topic: "SQL, Normalization, Transactions",
    uploader: "Arihant Jain",
    uInit: "AJ",
    hue: 160,
    rating: 4.9,
    reviews: 57,
    date: "2025-11-01",
    dl: 412,
    pages: 28,
    size: "5.1 MB",
    tags: ["DBMS", "SQL", "Past Papers", "Exam"],
    desc: "Curated collection of DBMS exam papers from 2021 to 2024. Each paper is annotated with common marking schemes and suggested answers.",
  },
  {
    id: "m3",
    title: "OS – Process Scheduling Diagrams & Solutions",
    type: "Assignment",
    emoji: "🗂️",
    course: "BCA – Semester 3",
    subject: "Operating Systems",
    professor: "Prof. R. Gupta",
    topic: "CPU Scheduling, Deadlocks",
    uploader: "Aman Jain",
    uInit: "AJ",
    hue: 38,
    rating: 4.5,
    reviews: 22,
    date: "2025-09-20",
    dl: 139,
    pages: 15,
    size: "1.8 MB",
    tags: ["OS", "Scheduling", "Gantt", "Deadlock"],
    desc: "Detailed assignment solutions with Gantt charts for FCFS, SJF, Round Robin, and Priority scheduling. Includes deadlock detection and prevention tables.",
  },
  {
    id: "m4",
    title: "Web Technologies – HTML / CSS / JS Study Guide",
    type: "Guide",
    emoji: "🌐",
    course: "BCA – Semester 5",
    subject: "Web Technologies",
    professor: "Dr. Priya Mehta",
    topic: "HTML5, CSS3, JavaScript ES6",
    uploader: "Siddharth Jain",
    uInit: "SJ",
    hue: 270,
    rating: 4.7,
    reviews: 41,
    date: "2025-10-28",
    dl: 305,
    pages: 60,
    size: "7.4 MB",
    tags: ["Web", "HTML", "CSS", "JavaScript"],
    desc: "Exhaustive guide covering HTML5 semantic elements, CSS Grid/Flexbox, and modern ES6+. Includes mini-projects and browser compatibility notes.",
  },
  {
    id: "m5",
    title: "Computer Networks – OSI Model & Protocols",
    type: "Notes",
    emoji: "📡",
    course: "BCA – Semester 4",
    subject: "Computer Networks",
    professor: "Dr. Kapil Verma",
    topic: "OSI Model, TCP/IP, Routing",
    uploader: "Aman jain",
    uInit: "AJ",
    hue: 239,
    rating: 4.6,
    reviews: 29,
    date: "2025-08-15",
    dl: 187,
    pages: 38,
    size: "4.0 MB",
    tags: ["Networks", "OSI", "TCP/IP", "Routing"],
    desc: "Layer-by-layer breakdown of the OSI and TCP/IP models with real-world protocol examples. Includes subnetting exercises and routing algorithm summaries.",
  },
  {
    id: "m6",
    title: "Software Engineering – SDLC Models & Case Studies",
    type: "Guide",
    emoji: "⚙️",
    course: "BCA – Semester 5",
    subject: "Software Engineering",
    professor: "Ms. Avantika Choudhary",
    topic: "Agile, Waterfall, SDLC",
    uploader: "Arihant Jain",
    uInit: "AJ",
    hue: 160,
    rating: 4.3,
    reviews: 18,
    date: "2025-11-05",
    dl: 98,
    pages: 22,
    size: "2.3 MB",
    tags: ["SE", "Agile", "UML", "SDLC"],
    desc: "Comprehensive SDLC comparison guide with UML diagrams, real university project case studies, and an Agile vs Waterfall decision matrix.",
  },
];

// ─────────────────────────────────────────────
// Badge colour config per type
// ─────────────────────────────────────────────
export const TYPE_STYLE = {
  "Notes":      { bg: "#EEF2FF", color: "#4F46E5", dot: "#818CF8" },
  "Exam Paper": { bg: "#FFF1F2", color: "#E11D48", dot: "#FB7185" },
  "Assignment": { bg: "#FFFBEB", color: "#B45309", dot: "#F59E0B" },
  "Guide":      { bg: "#ECFDF5", color: "#065F46", dot: "#34D399" },
};

// ─────────────────────────────────────────────
// Filter / sort options
// ─────────────────────────────────────────────
export const SUBJECTS = [
  "All Subjects",
  "Data Structures",
  "Database Management",
  "Operating Systems",
  "Web Technologies",
  "Computer Networks",
  "Software Engineering",
];

export const SEMESTERS = [
  "All Semesters",
  "Semester 3",
  "Semester 4",
  "Semester 5",
];

export const TYPES = [
  "All Types",
  "Notes",
  "Exam Paper",
  "Assignment",
  "Guide",
];

export const SORTS = [
  "Most Downloaded",
  "Highest Rated",
  "Newest First",
  "Most Reviewed",
];

// ─────────────────────────────────────────────
// Emoji map for type pills
// ─────────────────────────────────────────────
export const TYPE_EMOJI = {
  "Notes":      "📘",
  "Exam Paper": "📝",
  "Assignment": "🗂️",
  "Guide":      "🌐",
};
