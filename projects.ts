export type Project = {
  slug: string;
  index: string;
  name: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  stack: string[];
  challenges: { title: string; detail: string }[];
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "habesha-bet",
    index: "01",
    name: "Habesha Bet",
    category: "Real-Money Platform · Telegram Mini App",
    tagline:
      "A licensed multiplayer bingo platform running real money over Telegram, built to survive audit.",
    problem:
      "A licensed bingo operator needed a multiplayer game that could run inside Telegram, take real deposits over Ethiopia's mobile-money rails, and settle payouts fairly — with zero tolerance for double-spent cards, duplicate deposits, or a game that quietly desyncs under load.",
    solution:
      "I designed and built a real-time bingo engine with four permanent stake tiers, a 200-card pool per room, and an 80/20 split-pot payout model enforced server-side. Deposits are verified against incoming Telebirr SMS receipts with multi-account rotation, so the house can scale beyond a single payment number without opening a fraud gap. The entire product is bilingual — Amharic and English, 139 localized strings — because the operator's real users read Amharic first.",
    architecture: [
      "python-telegram-bot (async, v20+) driving the Telegram Mini App surface",
      "FastAPI backend as the source of truth for game state, wallets, and payout math",
      "SQLite with write-ahead logging for transactional integrity under concurrent card purchases",
      "React Mini App frontend polling game state on a tight cycle, rendering live card grids",
      "Telebirr SMS-forwarding ingestion pipeline with duplicate-transaction fingerprinting",
    ],
    features: [
      "Four permanent betting rooms (10 / 20 / 50 / 100 ETB) with independent 200-card pools",
      "60-second synchronized lobby countdown across all connected players",
      "Server-authoritative BINGO claim validation — no client can self-report a win",
      "Multi-account SMS deposit verification with duplicate-transaction protection",
      "Full Amharic/English localization across every screen and system message",
    ],
    stack: [
      "Python",
      "python-telegram-bot",
      "FastAPI",
      "SQLite",
      "React",
      "Telegram Mini Apps",
    ],
    challenges: [
      {
        title: "Keeping card state consistent under Telegram's polling model",
        detail:
          "Telegram Mini Apps don't give you a persistent socket by default. I built a polling-based sync layer with card-highlight reconciliation so a player's marked numbers survive poll cycles, network hiccups, and app backgrounding without desyncing from the server's authoritative state.",
      },
      {
        title: "Closing the double-claim window",
        detail:
          "In a room with 200 live cards, two players can call BINGO within the same tick. Payout logic runs server-side against a single authoritative game loop, so a claim is only valid if the server itself detects the winning pattern first — the client's claim is a request, never a verdict.",
      },
      {
        title: "Fraud-resistant deposits without a payment gateway",
        detail:
          "There's no card-payment rail to lean on here — deposits arrive as SMS receipts from Telebirr. I built rotation across multiple receiving accounts plus a duplicate-transaction fingerprint so the same receipt can't be replayed against two different players' wallets.",
      },
    ],
    metrics: [
      { label: "Betting rooms", value: "4 tiers" },
      { label: "Card pool / room", value: "200" },
      { label: "House / winner split", value: "20 / 80" },
      { label: "Localized strings", value: "139" },
    ],
  },
  {
    slug: "wayu-inventory",
    index: "02",
    name: "WAYU Inventory",
    category: "Pharmaceutical Inventory Management · Regulated Systems",
    tagline:
      "A full-stack inventory and compliance system for a pharmaceutical business, built for audit trails, not just stock counts.",
    problem:
      "WAYU needed more than a stock spreadsheet. A pharmaceutical inventory system has to track batches and expiries down to the unit, prove who changed what and when, and support multiple warehouse locations — while giving non-technical staff dashboards and reports they can actually act on.",
    solution:
      "I built a full-stack Next.js application with a Postgres/Prisma data layer covering inventory CRUD, stock movement history, and immutable audit logging. Every stock change is attributable. Batch and expiry tracking runs across multiple warehouse locations, with automated backups protecting the data a licensed pharmacy is legally required to keep. A v2.1 release added a full supplier and purchasing module — supplier records, purchase orders, and a goods-receiving workflow — plus new dashboard KPIs and Excel/PDF reporting so the business can hand a report to a regulator or an accountant without me in the loop.",
    architecture: [
      "Next.js 14 (App Router) as a unified full-stack framework",
      "PostgreSQL with Prisma ORM for typed, migration-safe data access",
      "NextAuth.js for authenticated, role-aware access to sensitive inventory data",
      "A provider-abstracted AI layer — Gemini by default for cost, with Claude and OpenAI as drop-in alternatives via environment variable",
      "Automated backup jobs and structured audit logging as first-class data, not an afterthought",
    ],
    features: [
      "Inventory CRUD with full stock movement history per item",
      "Batch and expiry management across multiple warehouse locations",
      "Immutable audit logging — every change is attributed and timestamped",
      "Supplier and Purchasing module: suppliers, purchase orders, goods-receiving workflow",
      "Five dashboard KPIs and three Excel report types added in v2.1",
      "Automated backups protecting regulated business records",
    ],
    stack: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth.js",
      "AI Provider Layer",
    ],
    challenges: [
      {
        title: "Designing an audit log that regulators would actually trust",
        detail:
          "Stock data that can be silently edited is worthless in a pharmacy context. I treated the audit trail as its own data model from day one — every mutation writes an attributed, timestamped record — rather than bolting logging on after the schema was already settled.",
      },
      {
        title: "Multi-location stock without race conditions",
        detail:
          "Two staff members adjusting the same SKU from different warehouse locations at once is a normal Tuesday, not an edge case. Stock movements are modeled as append-only transactions rather than direct quantity edits, so concurrent writes reconcile instead of clobbering each other.",
      },
      {
        title: "Making an AI layer that isn't locked to one vendor",
        detail:
          "I built the AI-assisted features behind a provider abstraction so the business can run on the cheapest capable model by default and swap in Claude or OpenAI with an environment variable — no code changes, no vendor lock-in.",
      },
    ],
    metrics: [
      { label: "Current version", value: "v2.1" },
      { label: "New KPIs (v2.1)", value: "5" },
      { label: "New report types", value: "3" },
      { label: "Data layer", value: "Postgres + Prisma" },
    ],
  },
  {
    slug: "telegram-bots",
    index: "03",
    name: "Telegram Bot Systems",
    category: "Business Automation · Bot Infrastructure",
    tagline:
      "Telegram-native automation that replaces manual business processes with a bot users already have installed.",
    problem:
      "Ethiopian businesses run on Telegram — customers, staff, and operators are already there. The opportunity isn't a new app people have to download; it's automation that lives inside the channel they already use, handling the repetitive parts of a business process without a human in the loop.",
    solution:
      "I build async, production-grade Telegram bots on python-telegram-bot for real operational workflows: order intake, verification flows, notifications, and the mini-app bridges that connect a chat interface to a full backend. Each bot is built the same way I'd build any backend service — typed, tested against real failure modes, and designed to keep running when Telegram's API hiccups, not just when everything goes right.",
    architecture: [
      "python-telegram-bot (async, v20+) as the bot runtime",
      "FastAPI services behind the bot for anything beyond simple messaging logic",
      "Webhook and long-polling deployment modes depending on hosting constraints",
      "SQLite or Postgres persistence depending on the scale of the business process",
    ],
    features: [
      "Conversational flows with proper state machines — not brittle keyword matching",
      "Mini App bridges connecting chat-based UX to full React frontends",
      "Notification and alerting systems for operational events",
      "Designed for graceful recovery from Telegram API rate limits and outages",
    ],
    stack: [
      "Python",
      "python-telegram-bot",
      "FastAPI",
      "SQLite",
      "PostgreSQL",
    ],
    challenges: [
      {
        title: "State that survives restarts",
        detail:
          "A bot mid-conversation with a user can't lose its place if the process restarts. Conversation state is persisted, not held only in memory, so a redeploy doesn't strand a user halfway through a flow.",
      },
      {
        title: "Designing for Telegram's failure modes, not just its happy path",
        detail:
          "Rate limits, delayed webhook delivery, and duplicate updates are normal operating conditions for a Telegram bot at any real scale. Idempotent update handling and backoff logic are built in from the start, not patched in after the first outage.",
      },
    ],
    metrics: [
      { label: "Runtime", value: "Async / v20+" },
      { label: "Deployment modes", value: "Webhook + polling" },
      { label: "Persistence", value: "SQLite / Postgres" },
    ],
  },
];
