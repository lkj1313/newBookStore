import { useState } from "react";

import SearchSuggestionList from "../../../../entities/home/ui/SearchSuggestionList";

import SearchForm from "./SearchForm";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative h-10 grow-[2]">
      <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <SearchSuggestionList setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default SearchBar;
