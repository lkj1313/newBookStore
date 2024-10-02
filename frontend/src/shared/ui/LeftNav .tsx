import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";

import useGlobalStore from "../store/globalStore";

const LeftNav = () => {
  const { darkMode, toggleDarkMode } = useGlobalStore(); // 컴포넌트 내부에서 호출

  return (
    <div className="flex gap-x-5 text-xs dark:text-white">
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
      <a href="">매장안내</a>
      <a href="">회원혜택</a>
    </div>
  );
};

export default LeftNav;
