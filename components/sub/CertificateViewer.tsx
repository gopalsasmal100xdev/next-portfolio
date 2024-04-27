import { certificates, Certificate } from "@/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";

export default function CertificateViewer() {
  return (
    <div className="flex flex-wrap gap-3">
      {certificates.map(({ name, iframe_link, bg_color }: Certificate, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={iframe_link} target="_blank">
                <span
                  className={`cursor-pointer inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                    bg_color === "red"
                      ? "bg-red-300 text-[#ffffffea]"
                      : bg_color === "green"
                      ? "bg-green-200 text-[#000000bc]"
                      : bg_color === "yellow"
                      ? "bg-yellow-200 text-[#5d00ffa9]"
                      : bg_color === "blue"
                      ? "bg-[#ff29f41f] text-white"
                      : "bg-white text-black"
                  } ring-blue-700/10`}>
                  {name}
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>{name}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}
