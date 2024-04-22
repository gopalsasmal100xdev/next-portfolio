import { Link } from "react-scroll";

type MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

export default function ViewAll({
  handleClick,
  title,
  scrollTo,
}: {
  handleClick: MouseEventHandler;
  title: string;
  scrollTo: string;
}) {
  return (
    <>
      <div className="w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div>
      <div className="text-center -translate-y-24">
        {title === "View All" ? (
          <button
            onClick={handleClick}
            className={`bg-cyan-600 text-white px-4 ${
              title === "View All" ? "animate-bounce" : "animate-none"
            } py-1.5 rounded-md hover:shadow-xl transition-all`}>
            {title}
          </button>
        ) : (
          <Link
            to={scrollTo}
            className={`bg-cyan-600 text-white px-4 ${
              title === "View All" ? "animate-bounce" : "animate-none"
            } cursor-pointer py-1.5 rounded-md hover:shadow-xl transition-all`}
            offset={-60}
            smooth={true}
            duration={500}
            // @ts-ignore
            onClick={() => handleClick()}>
            {title}
          </Link>
        )}
      </div>
    </>
  );
}
