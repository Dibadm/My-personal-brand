import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";

const links = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/abidmohammed",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abidmohammed",
    href: "https://linkedin.com",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@abidmohammed.dev",
    href: "mailto:hello@abidmohammed.dev",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center shadow-glass-lg md:px-16 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-gold-radial" />
          <div className="pointer-events-none absolute inset-0 bg-teal-radial" />

          <div className="relative">
            <span className="font-mono text-xs uppercase tracking-widest2 text-gold">
              Get in touch
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.1] text-ivory md:text-5xl">
              Let's build something amazing.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-balance text-ivory-muted">
              If your product involves real money, real compliance, or real
              users who can't afford downtime — that's exactly the kind of
              problem I want to hear about.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@abidmohammed.dev"
                data-cursor-hover
                className={buttonVariants({ size: "lg" })}
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                download
                data-cursor-hover
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                Download Resume
                <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    data-cursor-hover
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-center gap-2.5 rounded-full border border-white/[0.08] px-5 py-3 text-sm text-ivory-muted transition-all hover:border-white/20 hover:text-ivory"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-mono text-xs">{link.value}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
