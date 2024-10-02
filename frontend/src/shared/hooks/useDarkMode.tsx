import { useEffect } from "react";
import useGlobalStore from "../store/globalStore"; // 전역 상태 관리 훅

export const useDarkMode = () => {
  const { darkMode } = useGlobalStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "black";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "white";
    }
  }, [darkMode]);
};
