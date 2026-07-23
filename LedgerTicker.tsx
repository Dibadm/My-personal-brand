import { ledgerEntries } from "@/data/ledger";

/**
 * Signature hero element: an ambient, always-scrolling "system ledger"
 * that grounds the page in the real subject matter — production systems
 * that move money and log audit trails — instead of a generic gradient blob.
 */
export function LedgerTicker() {
  const doubled = [...ledgerEntries, ...ledgerEntries];

  return (
    <div className="relative h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-ink-200 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-ink-200 to-transparent" />
      <div className="animate-ticker motion-reduce:animate-none">
        {doubled.map((entry, i) => (
          <div
            key={i}
            className="flex items-center gap-3 border-b border-white/[0.05] px-5 py-3.5 font-mono text-[12px] text-ivory-muted"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal/70" />
            <span className="truncate">{entry}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
