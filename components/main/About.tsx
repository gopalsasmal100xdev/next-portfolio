"use client";

import Image from "next/image";
import SectionWrapper from "../sub/SectionWrapper";
import Link from "next/link";
import { Resume_url, about, name, title } from "@/constants";
import { SparklesIcon } from "@heroicons/react/24/solid";
import image from "@/public/image.jpg";

export default function AboutPage() {
  return (
    <SectionWrapper id="about" className="min-h-[90vh] pt-12">
      <h2 className="text-4xl font-bold text-center text-white">About Me</h2>

      <div className="w-full lg:w-11/12 2xl:w-4/5 mt-2 lg:mt-20 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center">
        <div className="p-3 w-56 self-start bg-white md:w-2/5 lg:w-72 flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-16 lg:-rotate-3 hover:-translate-y-2 transition-transform duration-300">
          <Image
            alt="profile"
            width={1000}
            height={1000}
            loading={"lazy"}
            className="w-full h-60 md:h-80 rounded-2xl object-cover transition-all bg-violet-100"
            src={image}
          />
          <span className="font-medium font-sans">
            {"< I Build Stuff 🚀 />"}
          </span>
        </div>

        <div className="flex-1 text-left mx-4 mt-4 md:mt-0 md:mx-0 md:p-6">
          <div className="flex flex-col gap-2.5">
            <p className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {name}
            </p>

            <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <h1 className="Welcome-text text-[13px]">{title}</h1>
            </div>

            <p className="text-sm md:text-base my-2 text-gray-600 dark:text-gray-300">
              {about}
            </p>
            <div className="flex items-center gap-4 md:mt-4">
              <Link
                href={Resume_url}
                target="_blank"
                className="text-sm md:text-base bg-violet-600 dark:bg-violet-700 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow">
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
