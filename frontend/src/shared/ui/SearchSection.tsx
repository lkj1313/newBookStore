import LogoSection from "./LogoSection";
import SearchBar from "./SearchBar";

const SearchSection = () => {
  return (
    <div className="lg:max-w-screen-lg mx-auto flex flex-row py-4">
      <div className="flex flex-col gap-y-2 w-full">
        <div className="w-full flex flex-row items-center gap-x-10 dark:text-white">
          <LogoSection />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
