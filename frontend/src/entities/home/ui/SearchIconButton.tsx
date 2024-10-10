import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

interface SearchIconButtonProps {
  searchQuery: string;
}

const SearchIconButton: React.FC<SearchIconButtonProps> = ({ searchQuery }) => {
  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/search/${searchQuery}`);
    }
  };
  return (
    <div
      className="absolute top-0 right-0 h-10 w-8 flex items-center justify-center rounded-lg cursor-pointer dark:text-black"
      onClick={handleSearch}
    >
      <CiSearch size={20} />
    </div>
  );
};

export default SearchIconButton;
