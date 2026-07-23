import { Loader } from "@/components/layout/Loader";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Cursor } from "@/components/layout/Cursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/sections/Hero";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function App() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Cursor />
      <Navbar />

      <main className="relative">
        <Hero />
        <WhatIBuild />
        <Projects />
        <Process />
        <TechStack />
        <About />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
