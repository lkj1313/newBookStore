const fetchPosts = async (
  searchQuery: string,
  display: number = 1,
  start: number = 1,
  sort: string = "sim"
) => {
  const response = await fetch(
    `/api/search/book?query=${encodeURIComponent(
      searchQuery
    )}&display=${display}&start=${start}&sort=${sort}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const result = await response.json();
  return result;
};

export default fetchPosts;
