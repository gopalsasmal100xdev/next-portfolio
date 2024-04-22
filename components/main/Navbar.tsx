"use client";

import { Socials, nav_items } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="/"
          className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/gs.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            GOPAL SASMAL
          </span>
        </Link>
        <ul className="flex items-center gap-8">
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

        <div className="flex flex-row gap-5">
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
      </div>
    </div>
  );
};

export default Navbar;
