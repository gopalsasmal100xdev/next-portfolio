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
              <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-gray-800 flex items-center justify-center">
                <Image
                  src={url}
                  alt={title}
                  width={80}
                  height={80}
                  className="h-12 w-12 md:h-14 md:w-14 object-contain invert-0 cursor-pointer"
                />
              </div>
              <p className="text-sm font-medium text-white md:text-base">
                {title.length > 6 ? `${title.slice(0, 4)}...` : `${title}`}
              </p>
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
