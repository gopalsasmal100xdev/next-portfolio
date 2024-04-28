"use client";

import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
type Props = {
  submissionCalendar: {
    [key: string]: number;
  };
};

export default function CodingCalendar({ submissionCalendar }: Props) {
  const [calendar, setCalendar] = useState<{ key: string; value: number }[]>(
    []
  );

  function getDate(key: string): string {
    const num = Number(key) * 1000;
    const date = new Date(num);
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    const result = [];
    for (const key in submissionCalendar) {
      result.push({ key, value: submissionCalendar[key] });
    }
    setCalendar(result);
  }, []);
  return (
    <div className="w-full h-[100%] flex flex-col flex-wrap gap-1 p-2">
      {calendar.map(({ key, value }, index: number) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span
                className={`${
                  value == 0
                    ? "bg-white"
                    : value > 0 && value < 5
                    ? "bg-[#3DED97]"
                    : value >= 5 && value <= 8
                    ? "bg-[#F9A603]"
                    : value > 8 && value <= 12
                    ? "bg-[#3AC7EB]"
                    : "bg-[#FA8072]"
                } w-3 h-3 rounded-sm cursor-pointer`}></span>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-[#3f1919a1]">
                {value} submission on {getDate(key)}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}
