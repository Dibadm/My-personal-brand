import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`container-page flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <a
          href="#top"
          data-cursor-hover
          className="font-display text-lg font-medium tracking-tight text-ivory"
        >
          Abid<span className="text-gold">.</span>
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-300 md:flex ${
            scrolled ? "glass" : ""
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="rounded-full px-4 py-2 text-sm text-ivory-muted transition-colors hover:text-ivory"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          variant="secondary"
          size="sm"
          data-cursor-hover
          onClick={() =>
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Let's talk
        </Button>
      </div>
    </motion.header>
  );
}
