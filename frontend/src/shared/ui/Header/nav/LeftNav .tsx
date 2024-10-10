import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";

import useGlobalStore from "../../../store/globalStore";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const { darkMode, toggleDarkMode } = useGlobalStore(); // 컴포넌트 내부에서 호출

  return (
    <div className="flex gap-x-5 text-[8px] items-center dark:text-white sm:text-xs">
      <div className="flex items-center cursor-pointer h-full">
        {darkMode ? (
          <FaRegMoon
            color="white"
            size={20}
            onClick={() => {
              console.log("Icon clicked!"); // 클릭 확인
              toggleDarkMode(); // 상태 변경 호출
            }}
          />
        ) : (
          <CiSun
            size={20}
            onClick={() => {
              console.log("Icon clicked!"); // 클릭 확인
              toggleDarkMode(); // 상태 변경 호출
            }}
          />
        )}
      </div>{" "}
      <div className="flex  gap-x-1 sm:gap-x-5">
        <Link to="">매장안내</Link>
        <Link to="">회원혜택</Link>
      </div>
    </div>
  );
};

export default LeftNav;
