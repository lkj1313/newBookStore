const fetchPosts = async (
  searchQuery: string,
  display: number = 10,
  start: number = 1,
  sort: string = "sim"
) => {
  const response = await fetch(
    `http://localhost:5173/api/search/book?query=${encodeURIComponent(
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
