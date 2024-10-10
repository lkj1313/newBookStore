import { useParams } from "react-router-dom";

import { BookItem } from "../../shared/types/book";
import SearchResultsItem from "../../entities/searchResult/ui/SearchResultsItem";
import { useQuery } from "@tanstack/react-query";
import fetchPosts from "../../shared/hooks/useFetchPost";
const SearchResultsPage = () => {
  const { query } = useParams();
  if (!query) {
    return <div>No query provided.</div>; // query가 없을 경우에 대한 처리
  }
  const { data, isLoading } = useQuery({
    queryKey: ["posts", query],
    queryFn: () => fetchPosts(query),
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="lg:max-w-screen-lg  m-auto mt-10">
      {data ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
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
