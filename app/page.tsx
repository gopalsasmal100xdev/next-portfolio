import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Experiences from "@/components/main/Experiences";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Experiences />
        <Contact />
      </div>
    </main>
  );
}
