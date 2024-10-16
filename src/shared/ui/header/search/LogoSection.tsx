import { FaBookOpenReader } from "react-icons/fa6";

const LogoSection = () => {
  return (
    <a href="/">
      <div className="flex grow-1 items-center p-3 gap-x-3">
        <FaBookOpenReader size={"30"} />
        <h1 className=" whitespace-nowrap text-sm  sm:text-4xl font-bold">
          L서점
        </h1>{" "}
      </div>
    </a>
  );
};

export default LogoSection;
