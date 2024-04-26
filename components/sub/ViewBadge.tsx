import { CodeBadge } from "@/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function ViewBadge({
  title,
  date,
  url,
  gif_url,
  year,
}: CodeBadge) {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex items-center justify-center">
                <BadgeDetails
                  url={url}
                  title={title}
                  gif_url={gif_url}
                  date={date}
                />
              </div>
              <div className="h-[40px]">
                <div className="mt-4 max-w-[96px] overflow-hidden truncate text-center cursor-pointer">
                  {title}
                </div>
                <div className="text-label-3 text-dark-label-3 mt-0.5 text-center text-xs">
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

export function BadgeDetails({
  url,
  gif_url,
  title,
  date,
}: {
  url: string;
  gif_url: string;
  title: string;
  date: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={url}
          alt={title}
          width={80}
          height={80}
          className="h-12 w-12 md:h-14 md:w-14 object-contain invert-0 cursor-pointer"
        />
      </DialogTrigger>
      <DialogContent className="max-w-screen-sm bg-[#3fcfff17] border-transparent backdrop-blur-sm rounded-md text-white">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
              <DialogClose asChild>
                <div className="w-3 h-3 rounded-full bg-red-500 hover:cursor-pointer"></div>
              </DialogClose>
              <DialogClose asChild>
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:cursor-pointer"></div>
              </DialogClose>
              <DialogClose asChild>
                <div className="w-3 h-3 rounded-full bg-green-500 hover:cursor-pointer"></div>
              </DialogClose>
            </div>
          </div>
          <DialogTitle className="pt-3">Badge Details</DialogTitle>
          <DialogDescription>
            <div className="flex justify-center items-center">
              <Image
                src={gif_url}
                alt={title}
                width={120}
                height={120}
                className="h-14 w-14 md:h-24 md:w-24 object-contain invert-0 cursor-pointer"
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="mt-4 text-center cursor-pointer">
                {title}
                <br />
                {date}
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
