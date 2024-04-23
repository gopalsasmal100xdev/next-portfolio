import { CodeBadge, Badges } from "@/constants";
import BadgeDialog from "./BadgeDialog";
import ViewBadge from "./ViewBadge";

export default function BadgeCard({
  id,
  header,
}: {
  id: string;
  header: string;
}) {
  return (
    <div className="relative flex w-full flex-col rounded-xl bg-clip-border text-gray-700 pt-5">
      <div className="flex justify-center items-center gap-2">
        {Badges[id].slice(0, 3).map((x: CodeBadge, index) => {
          return (
            <div className="" key={index}>
              <ViewBadge {...x} />
            </div>
          );
        })}
      </div>
      <div className="p-6 text-[#ffffffd5]">
        <h5 className="mb-2 capitalize block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {header}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased"></p>
      </div>
      <div className="p-6 pt-0">
        {Badges[id].length > 4 ? <BadgeDialog id={id} header={header} /> : null}
      </div>
    </div>
  );
}
