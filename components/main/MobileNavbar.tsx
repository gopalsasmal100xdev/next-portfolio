import { MenuIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import Image from "next/image";
import { Socials, nav_items } from "@/constants";
import Link from "next/link";

export default function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="text-white" />
      </SheetTrigger>
      <SheetContent className="bg-[#3fcfff17] border-transparent backdrop-blur-sm rounded-md">
        <SheetHeader>
          <SheetTitle>
            <ScrollLink
              to={"home"}
              offset={-60}
              smooth={true}
              duration={100}
              isDynamic={true}
              className="h-auto w-auto flex flex-row cursor-pointer items-center">
              <Image
                src="/gs.png"
                alt="logo"
                width={40}
                height={40}
                className="cursor-pointer hover:animate-slowspin"
              />
              <span className="font-bold ml-[10px] text-gray-300">
                GOPAL SASMAL
              </span>
            </ScrollLink>
          </SheetTitle>
          <SheetDescription>
            <ul className="font-bold flex flex-col items-start gap-6 mt-10">
              {nav_items.map((x, i) => (
                <li key={i}>
                  <ScrollLink
                    className="text-white hover:text-violet-500 transition-colors capitalize cursor-pointer"
                    to={x}
                    offset={-60}
                    smooth={true}
                    duration={100}
                    isDynamic={true}>
                    {x}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            <div className="flex justify-center items-center gap-6 mt-10">
              {Socials.map(({ name, icon, profile_link }) => (
                <Link
                  href={profile_link}
                  target="_blank"
                  key={name}
                  className="cursor-pointer">
                  <Image
                    src={icon}
                    alt={name}
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
