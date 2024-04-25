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
    <div className="relative flex w-full flex-col rounded-xl bg-clip-border text-gray-700">
      <div className="flex flex-row-reverse">
        <div className="h-[24px] w-[24px] text-label-3 dark:text-dark-label-3 cursor-pointer">
          {Badges[id].length > 4 ? (
            <BadgeDialog id={id} header={header} />
          ) : null}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        {Badges[id].slice(0, 3).map((x: CodeBadge, index) => {
          return (
            <div className="" key={index}>
              <ViewBadge {...x} />
            </div>
          );
        })}
      </div>
      <div className="text-label-3 mt-7 text-xs">Most Recent Badge</div>
      <div className="text-label-1 dark:text-dark-label-1 text-base">
        {header}
      </div>
    </div>
  );
}
