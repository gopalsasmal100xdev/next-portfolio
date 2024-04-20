"use client";

import { useState } from "react";
import SectionWrapper from "../sub/SectionWrapper";
import { Skill, skills } from "@/constants";
import SkillCard from "./SkillCard";

export default function Skills() {
  const [category, setCategory] = useState<Skill[]>(skills["frontend"]);
  const [active, setActive] = useState<string>("frontend");
  return (
    <SectionWrapper
      id="skills"
      className="min-h-screen mt-12 md:mt-0 mx-4 md:mx-0 xl:my-20 2xl:my-0">
      <h2 className="text-4xl text-white font-bold text-center">Tech Stack</h2>

      <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-6 bg-white dark:bg-grey-800 p-2 flex justify-between items-center gap-3 rounded-md">
        {Object.keys(skills).map((x: string, index: number) => {
          return (
            <span
              key={index}
              onClick={() => {
                setActive(x);
                //@ts-ignore
                setCategory(skills[x]);
              }}
              className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md ${
                x === active
                  ? "bg-violet-600 dark:bg-violet-600 text-white"
                  : "bg-white dark:bg-grey-800 hover:bg-gray-100 hover:dark:bg-grey-900"
              } transition-all capitalize`}>
              {x}
            </span>
          );
        })}
      </div>

      <div className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
        {/* {skillData.filter((s: skill) => s.category.toLowerCase() === category.toLowerCase()).map((s: any, i: number) => (
                    <SkillCard key={i} {...s} />
                ))} */}
        {category.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </SectionWrapper>
  );
}
