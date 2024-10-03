import { useQuery } from "@tanstack/react-query";

const useFetchPosts = (searchQuery: string) => {
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
    queryKey: ["posts", searchQuery],
    queryFn: fetchPosts,
    enabled: false, // 수동으로 실행
  });

  return { data, isLoading, error, refetch, isSuccess };
};

export default useFetchPosts;
