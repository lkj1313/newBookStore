import { useParams } from "react-router-dom";

import { BookItem } from "../../shared/types/book";
import SearchResultsItem from "../../features/search/searchResult/SearchResultsItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import fetchPosts from "../../shared/hooks/useFetchPost";
import useResponsiveDisplayCount from "../../shared/hooks/useResponsiveDisplayCount";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const SearchResultsPage = () => {
  const { query } = useParams();
  if (!query) {
    return <div>No query provided.</div>; // query가 없을 경우에 대한 처리
  }
  const { allDisplayCount } = useResponsiveDisplayCount(); // 훅 사용

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["posts", query, allDisplayCount],
      queryFn: ({ pageParam = 1 }) =>
        fetchPosts(query, allDisplayCount, pageParam),
      getNextPageParam: (lastPage, pages) => {
        const nextStart = pages.length * allDisplayCount + 1;
        if (lastPage.total > nextStart) {
          return nextStart; // 다음 시작 위치 계산
        } else {
          return undefined; // 더 이상 페이지가 없으면 undefined 반환
        }
      },
      initialPageParam: 1, // 첫 번째 페이지를 1로 설정
    });

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="p-3 m-auto mt-10 lg:max-w-screen-lg sm:p-0">
      {data?.pages.map((page, pageIndex) => (
        <div
          key={pageIndex}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {page.items.map((item: BookItem, itemIndex: number) => (
            <SearchResultsItem key={itemIndex} item={item} />
          ))}
        </div>
      ))}
      <div style={{ height: "1px" }} ref={ref} />
      {isFetchingNextPage && <p>Loading more...</p>}
    </div>
  );
};

export default SearchResultsPage;
