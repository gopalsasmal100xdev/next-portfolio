"use client";

import { projects_categories } from "@/constants";
import SectionWrapper from "../sub/SectionWrapper";
import { useState } from "react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>(
    projects_categories[0]
  );

  function filterProjects(s: string) {
    setActiveCategory(s);
  }

  return (
    <SectionWrapper id="projects" className="mx-4 md:mx-0 min-h-screen">
      <h2 className="text-4xl text-center font-bold text-white">Projects</h2>

      {/* Projects tab */}
      <div className="overflow-x-auto scroll-hide md:w-full max-w-screen-sm mx-auto mt-6 flex justify-between items-center gap-2 md:gap-3 bg-white dark:bg-grey-800 p-2 rounded-md">
        {projects_categories.map((s: string = "", i: number) => (
          <span
            key={i}
            onClick={() => filterProjects(s)}
            className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md ${
              activeCategory.toLowerCase() === s.toLowerCase()
                ? "bg-cyan-600 text-white"
                : "hover:bg-gray-100 hover:dark:bg-grey-900"
            } cursor-pointer transition-all`}>
            {s}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
}
