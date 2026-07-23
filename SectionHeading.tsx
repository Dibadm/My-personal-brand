import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      <span className="font-mono text-xs uppercase tracking-widest2 text-gold">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.15] text-ivory md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base leading-relaxed text-ivory-muted md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
