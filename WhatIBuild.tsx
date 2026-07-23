import { motion } from "framer-motion";
import { capabilities } from "@/data/capabilities";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";

export function WhatIBuild() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="Capabilities"
          title="What I build"
          description="Six categories of systems I've shipped into production — each one for a business that couldn't afford to get it wrong."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: (i % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card className="group h-full p-7 hover:border-gold/25 hover:bg-white/[0.055]">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] transition-colors duration-300 group-hover:bg-gold/10">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl font-medium text-ivory">
                    {cap.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ivory-muted">
                    {cap.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
