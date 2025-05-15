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
      <div className="relative z-10 min-h-[3000px]">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Others />
      </div>
    </>
  );
}
