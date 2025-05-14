import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <div className="relative z-10 h-[3000px]">
        <Hero />
        <About />
      </div>
    </>
  );
}
