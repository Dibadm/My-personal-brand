import { motion } from "framer-motion";
import { techStack } from "@/data/techstack";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function TechStack() {
  return (
    <section id="stack" className="relative py-28 md:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="Tools of the Trade"
          title="Tech stack"
          align="center"
          description="The tools I reach for by default — chosen for what they let me guarantee, not what's trending."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-3.5">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="glass group cursor-default rounded-2xl px-6 py-4 transition-colors duration-300 hover:border-gold/30 hover:bg-white/[0.06]"
            >
              <p className="font-display text-base text-ivory">{tech.name}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest2 text-ivory-faint group-hover:text-gold/70">
                {tech.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
