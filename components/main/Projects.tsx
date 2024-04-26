"use client";

import { projects } from "@/constants";
import SectionWrapper from "../sub/SectionWrapper";
import ProjectCard from "../sub/ProjectCard";

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="mx-4 md:mx-0 min-h-screen">
      <h2 className="text-4xl text-center font-bold text-white">Projects</h2>

      <div className="flex justify-center items-center">
        <div className="w-[80%] mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
