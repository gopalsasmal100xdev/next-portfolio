import { CodeBadge } from "@/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Image from "next/image";

export default function ViewBadge({ title, date, url, year }: CodeBadge) {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex items-center justify-center">
                <Image
                  src={url}
                  alt={title}
                  width={80}
                  height={80}
                  className="h-12 w-12 md:h-14 md:w-14 object-contain invert-0 cursor-pointer"
                />
              </div>
              <div className="h-[40px]">
                <div className="mt-4 max-w-[96px] overflow-hidden truncate text-center cursor-pointer">
                  {title}
                </div>
                <div className="text-label-3 dark:text-dark-label-3 mt-0.5 text-center text-xs">
                  {date}
                </div>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {title} | {year}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
