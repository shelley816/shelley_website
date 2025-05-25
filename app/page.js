import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Others from "@/components/Others";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Others />
      <footer className="relative bottom-0 w-full h-auto -mt-7 z-10">
        <div className="w-11/12 mx-auto">
          <span className="text-xs/6">
            &copy; 2025 Shelley Chen. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
