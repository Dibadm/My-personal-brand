import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const pillars = [
  {
    title: "Problem-solving first",
    body: "I don't start with a framework — I start with the constraint that will actually break the product: a fraud vector, a race condition, a regulator's expectation. The code follows once that's clear.",
  },
  {
    title: "Built to run, not to demo",
    body: "A demo has to work once, in front of you. A production system has to work every time, for someone else, at 2am, under load. I design for the second case by default.",
  },
  {
    title: "AI as leverage, not a shortcut",
    body: "I use AI-assisted development the way a senior engineer uses a very fast junior — for speed on the parts I've already thought through, never as a substitute for understanding the system I'm shipping.",
  },
  {
    title: "Learning continuously",
    body: "Every project — a bingo platform, a pharmaceutical inventory system, a Telegram bot — comes with a domain to learn before it comes with code to write. I treat that domain knowledge as part of the job.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="Engineering quality over engineering theater"
          />
          <Reveal delay={0.1} className="mt-6 space-y-5 text-[15px] leading-relaxed text-ivory-muted">
            <p>
              I'm a full-stack software engineer based in Addis Ababa, building
              products for businesses that operate under real constraints —
              licensing requirements, financial regulation, and users who
              aren't forgiving of downtime.
            </p>
            <p>
              My work spans real-time multiplayer systems, regulated
              inventory platforms, and the Telegram-native automation that
              Ethiopian businesses actually run on. What ties it together
              isn't a single technology — it's a habit of designing for the
              failure mode before it happens, not after.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="border-l-2 border-gold/30 pl-5">
                <h3 className="font-display text-lg font-medium text-ivory">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-muted">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
