"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import React, { useState } from "react";
import { Badges, CodeBadge } from "@/constants";
import ViewBadge from "./ViewBadge";

export default function BadgeDialog({
  id,
  header,
}: {
  id: string;
  header: string;
}) {
  const [badges, setBadges] = useState<CodeBadge[]>(
    Badges["monthly"].filter((x) => x.year === 2024)
  );

  function changeBadge(e: string) {
    const year = Number(e);
    const yearBadges = Badges["monthly"].filter((x) => x.year === year);
    setBadges(yearBadges);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          data-ripple-light="true"
          type="button"
          className="text-white select-none rounded-lg bg-[#5c96e66a] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-blue-500/20 transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          View More
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-md bg-[#3fcfff17] border-transparent rounded-md text-white">
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
          <DialogTitle className="pt-3">{header}</DialogTitle>
          <DialogDescription>
            <div className="flex justify-end">
              <Select onValueChange={(e) => changeBadge(e)}>
                <SelectTrigger className="w-[180px] cursor-pointer text-black">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value={"2024"} className="cursor-pointer">
                      2024
                    </SelectItem>
                    <SelectItem value={"2023"} className="cursor-pointer">
                      2023
                    </SelectItem>
                    <SelectItem value={"2022"} className="cursor-pointer">
                      2022
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="lg:w-4/8 2xl:w-4/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
              {badges.map((x, index) => (
                <ViewBadge {...x} key={index}/>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
