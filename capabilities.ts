import type { LucideIcon } from "lucide-react";
import {
  Layers,
  BrainCircuit,
  Workflow,
  Boxes,
  Send,
  Network,
} from "lucide-react";

export type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    icon: Layers,
    title: "SaaS Platforms",
    description:
      "Full-stack products built to run as a business, not a demo — auth, billing logic, and data models that hold up under real users.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Applications",
    description:
      "AI woven into product workflows behind provider-agnostic layers, so the feature outlives whichever model is cheapest this quarter.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Manual processes replaced with systems that run themselves — and log every decision so a human can still audit them.",
  },
  {
    icon: Boxes,
    title: "Inventory Systems",
    description:
      "Stock, batch, and expiry tracking with audit trails built for regulated environments, not just spreadsheets with better fonts.",
  },
  {
    icon: Send,
    title: "Telegram Mini Apps",
    description:
      "Full React applications running inside the app your users already have open — real-time, real-money-capable, production-grade.",
  },
  {
    icon: Network,
    title: "APIs & Backend Systems",
    description:
      "FastAPI and Python services designed around the failure modes, not just the happy path — because the happy path isn't the hard part.",
  },
];
