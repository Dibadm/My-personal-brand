import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/Button";
import { LedgerTicker } from "@/components/shared/LedgerTicker";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Ambient background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gold-radial" />
      <div className="pointer-events-none absolute inset-0 bg-teal-radial" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 animate-float-slow rounded-full bg-gold/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-10 h-[28rem] w-[28rem] animate-float-slower rounded-full bg-teal/10 blur-[130px]"
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-teal shadow-[0_0_12px_2px_rgba(78,205,196,0.5)]" />
            <span className="font-mono text-xs uppercase tracking-widest2 text-ivory-muted">
              Available for select engagements · Addis Ababa
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance font-display text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl lg:text-[4.25rem]"
          >
            Software for businesses
            <br />
            where <span className="text-gold">the stakes are real.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-ivory-muted"
          >
            I'm Abid Mohammed, a full-stack engineer building production
            systems that move real money and carry real regulatory weight —
            licensed platforms, audited inventory, and the APIs underneath
            them. Not prototypes. Systems that have to be right.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button
              data-cursor-hover
              onClick={() =>
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="/resume.pdf"
              download
              data-cursor-hover
              className={buttonVariants({ variant: "secondary" })}
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 flex items-center gap-8 font-mono text-xs text-ivory-faint"
          >
            <span>React · TypeScript</span>
            <span className="h-1 w-1 rounded-full bg-ivory-faint" />
            <span>Python · FastAPI</span>
            <span className="h-1 w-1 rounded-full bg-ivory-faint" />
            <span>Telegram Mini Apps</span>
          </motion.div>
        </motion.div>

        {/* Signature element: live-feeling system ledger */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass relative hidden h-[440px] flex-col rounded-2xl shadow-glass-lg lg:flex"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-ivory-muted">
              System Ledger
            </span>
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-gold/60" />
              <span className="h-2 w-2 rounded-full bg-teal/60" />
              <span className="h-2 w-2 rounded-full bg-ivory-faint/60" />
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <LedgerTicker />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
