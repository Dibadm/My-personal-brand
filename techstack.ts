export type TechBadge = {
  name: string;
  category: "Frontend" | "Backend" | "Data" | "Tooling" | "AI";
};

export const techStack: TechBadge[] = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Python", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Next.js", category: "Frontend" },
  { name: "PostgreSQL", category: "Data" },
  { name: "SQLite", category: "Data" },
  { name: "Prisma", category: "Data" },
  { name: "Git", category: "Tooling" },
  { name: "GitHub", category: "Tooling" },
  { name: "AI-Assisted Dev", category: "AI" },
];
