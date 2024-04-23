import SectionWrapper from "../sub/SectionWrapper";
import BadgeCard from "../sub/BadgeCard";

export default function CodingProfiles() {
  return (
    <SectionWrapper id="coding" className="mb-16 mx-4 lg:mx-0">
      <h2 className="text-center text-white font-bold text-4xl">
        Coding Profiles
      </h2>
      <div className="flex justify-center items-center mt-10">
        <div className="w-[80%] ">
          <div className="grid gap-4 grid-cols-3">
            <div className="relative rounded-lg p-2 bg-[#3fcfff17] shadow-md">
              {/* Solved problems fetch from leetcode api */}
            </div>
            <div className="relative rounded-lg p-2 bg-[#3fcfff17] shadow-md">
              <BadgeCard id={"complition"} header="LeetCode Badges" />
            </div>
            <div className="relative rounded-lg p-2 bg-[#3fcfff17] shadow-md">
              <BadgeCard id={"github"} header="GitHub Badges" />
            </div>
          </div>

          {/* <div className="grid gap-4 grid-cols-2">
            <div className="relative rounded-lg bg-slate-900 p-2">
            </div>
            <div className="relative rounded-lg bg-slate-900 p-2">
            </div>
          </div> */}
        </div>
      </div>
    </SectionWrapper>
  );
}
