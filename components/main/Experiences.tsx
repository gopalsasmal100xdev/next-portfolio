"use client";

import { useState } from "react";
import {
  experiences as experiencesData,
  educations as educationData,
  Experience,
  Education,
} from "@/constants/index";
import SectionWrapper from "../sub/SectionWrapper";
import ExperienceCard from "../sub/ExperienceCard";
import ViewAll from "../sub/ViewAll";

export default function Experiences() {
  const [show, setShow] = useState<string>("Experience");
  const [viewAll, setViewAll] = useState<boolean>(false);

  const [experiences, setExperiences] = useState<Experience[]>(
    [...experiencesData].reverse()
  );
  const [educations, setEducations] = useState<Education[]>(
    [...educationData].reverse()
  );
  return (
    <SectionWrapper id="experience" className="min-h-screen">
      <h2 className="text-4xl text-center text-white font-bold">Experience</h2>

      <div className="w-fit mx-auto mt-6 p-2 bg-white dark:bg-grey-800 rounded-md flex gap-2 items-center">
        {["Experience", "Education"].map((x, index) => (
          <button
            key={index}
            onClick={() => setShow(x)}
            className={`py-2 px-4 rounded-md transition-colors ${
              show === x
                ? "bg-cyan-600 text-white"
                : "hover:bg-gray-100 text-black"
            }`}>
            {x}
          </button>
        ))}
      </div>

      <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
        <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
          <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>

          {viewAll
            ? (show === "Experience" ? experiences : educations).map(
                (x, index: number) => (
                  //@ts-ignore
                  <ExperienceCard key={index} {...x} index={index} />
                )
              )
            : (show === "Experience" ? experiences : educations)
                .slice(0, 2)
                //@ts-ignore
                .map((x, i) => <ExperienceCard key={i} {...x} index={i} />)}
        </div>
      </div>

      {(show === "Experience" ? experiences : educations).length > 2 && (
        <ViewAll
          scrollTo="experience"
          title={viewAll ? "Okay, I got it" : "View All"}
          handleClick={() => setViewAll(!viewAll)}
        />
      )}
    </SectionWrapper>
  );
}
