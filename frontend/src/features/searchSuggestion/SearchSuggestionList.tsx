interface SearchSuggestionListProps {
  setSearchQuery: (query: string) => void; // 'setSearchQuery'의 타입을 명시
}
const SearchSuggestionList: React.FC<SearchSuggestionListProps> = ({
  setSearchQuery,
}) => {
  return (
    <div className="absolute -bottom-6 gap-x-4 hidden sm:text-xs sm:flex">
      <div
        className="cursor-pointer whitespace-nowrap"
        onClick={() => {
          setSearchQuery("모던 자바스크립트 Deep Dive");
        }}
      >
        모던 자바스크립트 Deep Dive
      </div>
      <div
        className="cursor-pointer whitespace-nowrap"
        onClick={() => {
          setSearchQuery("모던 리액트 Deep Dive");
        }}
      >
        모던 리액트 Deep Dive
      </div>
    </div>
  );
};

export default SearchSuggestionList;
