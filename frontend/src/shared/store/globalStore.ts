import { create } from "zustand";
interface AppState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
const useGlobalStore = create<AppState>((set) => ({
  darkMode: false,
  toggleDarkMode: () => {
    set((state) => ({ darkMode: !state.darkMode }));
  },
}));

export default useGlobalStore;
