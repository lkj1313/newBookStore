import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <button
        type="submit" // type을 "submit"으로 설정
        className="absolute top-0 right-0 h-10 w-8 flex items-center justify-center rounded-lg cursor-pointer dark:text-black"
      >
        <CiSearch size={20} />
      </button>
    </form>
  );
};

export default SearchForm;
