import LeftNav from "./LeftNav ";
import RightNav from "./RightNav";

const Nav = () => {
  return (
    <div className="border-b border-gray-200 relative">
      <div className="lg:max-w-screen-lg mx-auto ">
        <div className=" flex flex-row justify-between pt-4 pb-4 ">
          <LeftNav />
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default Nav;
