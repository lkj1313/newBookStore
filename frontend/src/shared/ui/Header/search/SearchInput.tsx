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
      type="text"
      placeholder="책을 검색해 주세요"
      className="w-full h-10 p-3 pr-8 border-gray-300 border-2 rounded-lg relative dark:border-white dark:text-black"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchInput;
