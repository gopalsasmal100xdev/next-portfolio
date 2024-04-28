import SectionWrapper from "../sub/SectionWrapper";
import BadgeCard from "../sub/BadgeCard";
import CertificateViewer from "../sub/CertificateViewer";
import CodingChart from "../sub/CodingChart";
import CodingPieChart from "../sub/CodingPieChart";
import CodingCalendar from "../sub/CodingCalendar";
import {
  geeksforgeeks_profile_url,
  hackerrank_profile_url,
  leetcode_profile_details,
  leetcode_profile_url,
} from "@/constants/index";
import { Info, Link2Icon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import GFGCodingPieChart from "../sub/GFGCodingPieChart";
import Link from "next/link";

export default function CodingProfiles() {
  return (
    <SectionWrapper id="coding" className="mb-16 mx-4 lg:mx-0">
      <h2 className="text-center text-white font-bold text-4xl">
        Coding Profiles
      </h2>
      <div className="flex justify-center items-center mt-10">
        <div className="lg:w-[80%] w-[100%]">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/3 rounded-lg p-2 bg-[#3fcfff17] border-transparent backdrop-blur-sm shadow-md">
              <BadgeCard id={"complition"} header="LeetCode Badges" />
            </div>
            <div className="w-full md:w-1/3 rounded-lg p-2 bg-[#3fcfff17] border-transparent backdrop-blur-sm shadow-md">
              <BadgeCard id={"github"} header="GitHub Badges" />
            </div>
            <div className="w-full md:w-1/3 rounded-lg p-2 bg-[#3fcfff17] border-transparent backdrop-blur-sm shadow-md">
              <h1 className="text-[#fffc] font-bold p-2">Certificates</h1>
              <CertificateViewer />
            </div>
          </div>

          <section className="flex flex-col md:flex-row gap-4 pt-5">
            <div className="w-full md:w-1/3 h-[350px] rounded bg-[#3fcfff17] border-transparent backdrop-blur-sm shadow-md p-4">
              <ProfileLink
                title="LeetCode Solved Problems"
                url={leetcode_profile_url}
              />
              <CodingPieChart />
            </div>
            <div className="w-full md:w-1/3 h-[350px] rounded bg-[#3fcfff17] border-transparent backdrop-blur-sm shadow-md p-4">
              <ProfileLink
                title="GeeksforGeeks Solved Problems"
                url={geeksforgeeks_profile_url}
              />
              <GFGCodingPieChart />
            </div>
            <div className="w-full md:w-1/3 h-[350px] rounded bg-[#3fcfff17] border-transparent backdrop-blur-sm shadow-md p-4">
              <ProfileLink
                title="Past Week Solved Problems History"
                url={hackerrank_profile_url}
              />
              <CodingChart />
            </div>
          </section>

          {/* Coding Calender */}
          <div className="w-full h-[170px] overflow-x-auto overflow-y-hidden bg-[#3fcfff17] border-transparent backdrop-blur-sm shadow-md p-4 mt-10">
            <ProfileLink
              title="Submissions in the past one year [2023-2024]"
              url={leetcode_profile_url}
            />
            <CodingCalendar {...leetcode_profile_details} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

type ProfileProps = {
  title: string;
  url: string;
};

export function ProfileLink({ title, url }: ProfileProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className="black-gradient cursor-pointer flex flex-row gap-2">
      <Link2Icon className="text-white cursor-pointer" width={20} height={20} />
      <span className="text-[#ffffffc4]">{title}</span>
    </Link>
  );
}
