import { motion } from "framer-motion";
import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="How I Work"
          title="My engineering process"
          description="The same six phases whether the project is a weekend bot or a multi-month platform — because skipping a phase is where production incidents come from."
        />

        <div className="relative mt-16">
          {/* Spine */}
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-gold/50 via-white/10 to-transparent md:block" />

          <div className="space-y-10 md:space-y-14">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col gap-4 md:flex-row md:items-start md:gap-8"
              >
                <div className="glass relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
                  <span className="font-mono text-sm text-gold">{step.step}</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-display text-xl font-medium text-ivory md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ivory-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
