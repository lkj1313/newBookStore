import { useParams } from "react-router-dom";
import useFetchPosts from "../../shared/hooks/useFetchPost";
import { useEffect } from "react";
import { BookItem } from "../../shared/types/book";
import SearchResultsItem from "./SearchResultsItem";
const SearchResultsPage = () => {
  const { query } = useParams();
  if (!query) {
    return <div>No query provided.</div>; // query가 없을 경우에 대한 처리
  }
  const { data, refetch } = useFetchPosts(query);
  useEffect(() => {
    if (query) {
      refetch();
    }
  }, [query]);
  return (
    <div>
      <h1>Search Results for: {query}</h1>
      {data ? (
        <div>
          {data.items.map((item: BookItem) => (
            <SearchResultsItem item={item} />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
