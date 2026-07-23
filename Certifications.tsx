import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Certifications() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="Foundations"
          title="Certifications"
          description="Formal groundwork underneath the self-directed learning — completed before most of the production systems above."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass flex items-start gap-4 rounded-2xl p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                <GraduationCap className="h-5 w-5 text-gold" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-teal">
                  {cert.year}
                </p>
                <h3 className="mt-1.5 font-display text-base font-medium text-ivory">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-ivory-muted">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
