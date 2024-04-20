"use client";

import { FastAverageColor } from "fast-average-color";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface SkillCardProps {
  skill: {
    title: string;
    url: string;
  };
}

export default function SkillCard({ skill: { title, url } }: SkillCardProps) {
  const [bgColor, setBgColor] = useState<string>("");
  useEffect(() => {
    new FastAverageColor()
      .getColorAsync(url)
      .then((color: any) => {
        const rgba = color.rgb.split(")");
        setBgColor(rgba[0] + ",0.07)");
      })
      .catch((e: any) => {
        console.log(e);
      });
  }, [url]);

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div
        title={title}
        style={{ backgroundColor: bgColor }}
        className={
          "h-25 w-25 md:h-24 md:w-24 rounded-full bg-gray-100 dark:bg-grey-800 flex items-center justify-center"
        }>
        <Image alt="skill" width={100} height={100} src={url} />
      </div>
      <p className="text-sm font-medium text-white md:text-base">{title}</p>
    </div>
  );
}
