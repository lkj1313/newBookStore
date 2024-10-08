import { useState } from "react";

import SearchSuggestionList from "./SearchSuggestionList";

import SearchForm from "../../../shared/ui/Header/search/SearchForm";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative h-10 grow-[2]">
      <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <SearchSuggestionList setSearchQuery={setSearchQuery} />
      {/* 검색 아이콘 */}
    </div>
  );
};

export default SearchBar;
