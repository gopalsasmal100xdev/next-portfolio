import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { slideInFromLeft } from "@/utils/motion";
import Link from "next/link";
import { Link2Icon } from "lucide-react";

interface Props {
  name: string;
  description: string;
  tags: string[];
  image_url: string;
  source_code_url: string;
  live_link?: string;
}

const ProjectCard = ({
  name,
  description,
  image_url,
  source_code_url,
  tags,
  live_link,
}: Props) => {
  return (
    <motion.div variants={slideInFromLeft(1)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#3fcfff17] border-transparent p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <Image
            src={image_url}
            alt={name}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-md z-10"
          />

          <div className="absolute inset-0 flex justify-end m-3">
            <Link
              href={source_code_url}
              target="_blank"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <Image
                src={"/skills/github.png"}
                alt="source code"
                width={10}
                height={10}
                className="w-1/2 h-1/2 object-contain"
              />
            </Link>
          </div>
          {live_link && (
            <div className="flex justify-end">
              <Link
                href={live_link}
                target="_blank"
                className="black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer">
                <Link2Icon
                  className="text-white cursor-pointer"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="cursor-pointer inline-flex items-center rounded-md bg-[#ff29f41f] px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {tag}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
