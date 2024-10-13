import LogoSection from "../../shared/ui/header/search/LogoSection";
import SearchBar from "../../shared/ui/header/search/SearchBar";

const SearchSection = () => {
  return (
    <div>
      <div className="lg:max-w-screen-lg mx-auto flex flex-row py-4">
        <div className="flex flex-col gap-y-2 w-full">
          <div className="w-full flex flex-row items-center gap-x-4 dark:text-white sm:gap-x-10">
            <LogoSection />
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
