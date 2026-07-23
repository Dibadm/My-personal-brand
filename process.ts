export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Before a line of code, I want the real constraint — the regulation, the payment rail, the edge case that actually breaks things. Most costly rewrites start with a discovery step that got skipped.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "Data models, auth boundaries, and failure modes get designed on paper first. An audit log or a payout split is a schema decision, not a feature you bolt on later.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Typed end to end, built in reviewable phases, with backward compatibility respected at every step. No rewrites for the sake of a cleaner diff.",
  },
  {
    step: "04",
    title: "Testing",
    description:
      "Concurrency, duplicate requests, and partial failures get tested deliberately — the bugs that only show up when two people click at once, not the ones that show up in a demo.",
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "Shipped with monitoring and backups in place from day one, because a regulated business doesn't get to discover its backup strategy after data loss.",
  },
  {
    step: "06",
    title: "Iteration",
    description:
      "Production systems evolve under real usage. I treat a v2.1 release the same way I treat a v1 — deliberately, with a plan, without breaking what already works.",
  },
];
