"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import wavingHand from "@/public/waving-hand.gif";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { NAME, Resume_url, Short_desc, titles } from "@/constants";
import Typewriter from "typewriter-effect";
import Globe from "./Globe";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 justify-center mt-40 m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
          <div className="flex items-center gap-1">
            <Image
              unoptimized={true}
              alt="waving-hand"
              width={30}
              height={30}
              src={wavingHand}
            />
            <p className="text-lg md:text-xl mt-2 md:mt-1.5">Hey</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold relative">
            I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {NAME}
            </span>
          </h1>
          <div className="flex flex-row items-center md:items-center gap-1.5">
            <span className="text-lg md:text-2xl">I am into</span>
            <span className="text-lg">
              <Typewriter
                options={{
                  strings: titles,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                  wrapperClassName:
                    "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-green-500 text-lg md:text-2xl font-bold",
                  cursorClassName:
                    "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-lg md:text-2xl",
                }}
              />
            </span>
          </div>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]">
          {Short_desc}
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href={Resume_url}
          target="_blank"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          Resume
        </motion.a>
      </div>

      <div className="w-full h-full lg:flex lg:justify-center lg:items-center hidden">
        <Globe />
      </div>
    </motion.div>
  );
};

export default HeroContent;
