import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ProjectVisual } from "./ProjectVisual";

function ProjectCase({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="glass overflow-hidden rounded-3xl"
    >
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
        <div className="p-8 md:p-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-ivory-faint">
                {project.index}
              </span>
              <h3 className="mt-2 font-display text-2xl font-medium text-ivory md:text-3xl">
                {project.name}
              </h3>
              <p className="mt-1.5 text-sm text-gold">{project.category}</p>
            </div>
          </div>

          <p className="mt-6 text-balance text-[15px] leading-relaxed text-ivory-muted">
            {project.tagline}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-display text-xl text-ivory">{m.value}</p>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest2 text-ivory-faint">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>

          <button
            data-cursor-hover
            onClick={() => setExpanded((v) => !v)}
            className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest2 text-teal transition-colors hover:text-teal-soft"
          >
            {expanded ? "Hide case study" : "Read full case study"}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </button>
        </div>

        <div className="p-8 pt-0 lg:p-10 lg:pl-0">
          <ProjectVisual slug={project.slug} />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/[0.06]"
          >
            <div className="grid grid-cols-1 gap-10 p-8 md:p-10 lg:grid-cols-2">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest2 text-gold">
                  The problem
                </h4>
                <p className="mt-3 text-[15px] leading-relaxed text-ivory-muted">
                  {project.problem}
                </p>

                <h4 className="mt-8 font-mono text-xs uppercase tracking-widest2 text-gold">
                  The solution
                </h4>
                <p className="mt-3 text-[15px] leading-relaxed text-ivory-muted">
                  {project.solution}
                </p>

                <h4 className="mt-8 font-mono text-xs uppercase tracking-widest2 text-gold">
                  Architecture
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {project.architecture.map((a) => (
                    <li
                      key={a}
                      className="flex gap-3 text-[15px] leading-relaxed text-ivory-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest2 text-gold">
                  Key features
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-3 text-[15px] leading-relaxed text-ivory-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {f}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-8 font-mono text-xs uppercase tracking-widest2 text-gold">
                  Engineering challenges
                </h4>
                <div className="mt-3 space-y-5">
                  {project.challenges.map((c) => (
                    <div key={c.title}>
                      <p className="text-[15px] font-medium text-ivory">
                        {c.title}
                      </p>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-ivory-muted">
                        {c.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

const filters = ["All", "Real-Money Platform", "Regulated Systems", "Automation"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.category.includes(activeFilter);
  });

  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured projects"
            description="Three systems built for businesses where a bug isn't a bad review — it's a refund, an audit finding, or a license risk."
          />

          <div className="glass flex shrink-0 flex-wrap gap-1 rounded-full p-1.5">
            {filters.map((f) => (
              <button
                key={f}
                data-cursor-hover
                onClick={() => setActiveFilter(f)}
                className={`rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-wide transition-colors ${
                  activeFilter === f
                    ? "bg-gold text-ink"
                    : "text-ivory-muted hover:text-ivory"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 space-y-8">
          {filtered.map((project, i) => (
            <ProjectCase key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
