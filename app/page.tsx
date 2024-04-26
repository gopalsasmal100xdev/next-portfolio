import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Experiences from "@/components/main/Experiences";
import CodingProfiles from "@/components/main/CodingProfiles";
import Projects from "@/components/main/Projects";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <CodingProfiles />
        <Contact />
      </div>
    </main>
  );
}
