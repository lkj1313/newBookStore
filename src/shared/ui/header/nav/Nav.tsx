import LeftNav from "./LeftNav ";
import RightNav from "./RightNav";

const Nav = () => {
  return (
    <div className="bg-gray-100 sticky z-10 top-0 dark:bg-slate-950">
      <div className="lg:max-w-screen-lg mx-auto ">
        <div className=" flex flex-row justify-between gap-1 p-3 pt-4 pb-4 ">
          <LeftNav />
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default Nav;
