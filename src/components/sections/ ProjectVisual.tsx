import type { FC } from "react";

/**
 * Abstract, hand-tuned visual mockups standing in for real product
 * screenshots. Each one is shaped around what that product actually
 * does, so it reads as a considered placeholder rather than a gray box —
 * swap these for real screenshots/video capture when available.
 */

function BingoVisual() {
  const cells = Array.from({ length: 25 });
  return (
    <div className="grid h-full grid-cols-5 gap-1.5 p-6">
      {cells.map((_, i) => {
        const isMarked = [1, 4, 6, 12, 14, 18, 22].includes(i);
        return (
          <div
            key={i}
            className={`flex items-center justify-center rounded-md font-mono text-[10px] transition-colors ${
              isMarked
                ? "bg-gold/20 text-gold"
                : "bg-white/[0.03] text-ivory-faint"
            }`}
          >
            {((i * 7 + 3) % 75) + 1}
          </div>
        );
      })}
    </div>
  );
}

function LedgerVisual() {
  const rows = [
    ["SKU-2291", "Amoxicillin 500mg", "Batch #4471", "+120"],
    ["SKU-1187", "Paracetamol 250mg", "Batch #4402", "-45"],
    ["SKU-3390", "ORS Sachets", "Batch #4471", "+300"],
    ["SKU-0921", "Vitamin C Syrup", "Batch #4390", "-12"],
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-2 p-6">
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-4 gap-2 rounded-md bg-white/[0.03] px-3 py-2.5 font-mono text-[10px] text-ivory-muted"
        >
          <span className="text-teal">{row[0]}</span>
          <span className="col-span-2 truncate text-ivory-faint">{row[1]}</span>
          <span className={row[3].startsWith("+") ? "text-gold" : "text-ivory-faint"}>
            {row[3]}
          </span>
        </div>
      ))}
    </div>
  );
}

function BotVisual() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-6">
      <div className="max-w-[75%] rounded-2xl rounded-bl-sm bg-white/[0.05] px-4 py-2.5 font-mono text-[11px] text-ivory-muted">
        /start
      </div>
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-teal/10 px-4 py-2.5 font-mono text-[11px] text-teal">
        Order received · queued for confirmation
      </div>
      <div className="max-w-[75%] rounded-2xl rounded-bl-sm bg-white/[0.05] px-4 py-2.5 font-mono text-[11px] text-ivory-muted">
        /status
      </div>
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-gold/10 px-4 py-2.5 font-mono text-[11px] text-gold">
        Status: verified ✓
      </div>
    </div>
  );
}

const visuals: Record<string, FC> = {
  "habesha-bet": BingoVisual,
  "wayu-inventory": LedgerVisual,
  "telegram-bots": BotVisual,
};

export function ProjectVisual({ slug }: { slug: string }) {
  const Visual = visuals[slug] ?? BingoVisual;
  return (
    <div className="glass relative h-full min-h-[320px] overflow-hidden rounded-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
      </div>
      <div className="h-[calc(100%-40px)]">
        <Visual />
      </div>
    </div>
  );
}
