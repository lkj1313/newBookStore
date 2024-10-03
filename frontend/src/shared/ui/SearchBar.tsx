import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useFetchPosts from "../hooks/useFetchPost";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, refetch } = useFetchPosts(searchQuery);
  //   if (isLoading) return <div>isPending</div>;
  const handleSearch = () => {
    if (searchQuery) {
      refetch(); // 검색 실행
    }
  };

  ///////// 지금 데이터가 검색버튼을 안누르고 인풋에 글만 써도 받아와지고있음
  console.log(data);
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

      <div className="absolute -bottom-6 text-xs flex gap-x-4">
        <div
          className="cursor-pointer"
          onClick={() => {
            setSearchQuery("모던 자바스크립트 Deep Dive");
          }}
        >
          모던 자바스크립트 Deep Dive
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setSearchQuery("모던 리액트 Deep Dive");
          }}
        >
          모던 리액트 Deep Dive
        </div>
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
