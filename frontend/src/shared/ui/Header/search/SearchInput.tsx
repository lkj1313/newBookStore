interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <input
      className="w-full h-10 p-3 pr-8 border-gray-300 border-2 rounded-lg relative dark:border-white dark:text-black text-xs sm:text-base"
      type="text"
      placeholder="책을 검색해 주세요"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchInput;
