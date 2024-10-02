import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const fetchPosts = async () => {
    const response = await fetch(
      `http://localhost:3000/search/book?query=${searchQuery}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const result = await response.json();
    return result;
  };
  const { data, isLoading, error, refetch, isSuccess } = useQuery({
    queryKey: ["posts", searchQuery], // 캐시 키로 사용
    queryFn: fetchPosts, // 서버에서 데이터를 가져오는 함수
    enabled: false,
  });
  const handleSearch = () => {
    if (searchQuery.trim()) {
      refetch(); // 검색어가 있을 때만 데이터를 다시 가져옴
    }
  };
  //   if (isLoading) return <div>isPending</div>;
  if (isSuccess) {
    console.log(data);
  }

  return (
    <div className="relative h-10 grow-[2]">
      <input
        type="text"
        placeholder="책을 검색해 주세요"
        className="w-full h-10 p-3 pr-8 border-gray-300 border-2 rounded-lg dark:border-white relative"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* 추천 검색어 리스트 */}

      <div className="absolute text-xs flex gap-x-4">
        <div className="cursor-pointer">모던 자바스크립트 Deep Dive</div>
        <div className="cursor-pointer">모던 리액트 Deep Dive</div>
      </div>
      {/* 검색 아이콘 */}
      <div
        className="absolute top-0 right-0 h-10 w-8 flex items-center justify-center rounded-lg cursor-pointer dark:text-black"
        onClick={handleSearch}
      >
        <CiSearch size={20} />
      </div>
    </div>
  );
};

export default SearchBar;
