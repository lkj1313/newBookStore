import { useState } from "react";

import SearchSuggestionList from "./SearchSuggestionList";
import SearchIconButton from "./SearchIconButton";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative h-10 grow-[2]">
      <input
        type="text"
        placeholder="책을 검색해 주세요"
        className="w-full h-10 p-3 pr-8 border-gray-300 border-2 rounded-lg relative dark:border-white dark:text-black"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* 추천 검색어 리스트 */}
      <SearchSuggestionList setSearchQuery={setSearchQuery} />
      {/* 검색 아이콘 */}
      <SearchIconButton searchQuery={searchQuery} />
    </div>
  );
};

export default SearchBar;
