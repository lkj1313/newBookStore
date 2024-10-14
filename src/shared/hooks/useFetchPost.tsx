const fetchPosts = async (
  searchQuery: string,
  display: number = 10,
  start: number = 1,
  sort: string = "sim"
) => {
  const response = await fetch(
    `https://new-book-store-7m3b.vercel.app/api/index/search/book?query=${encodeURIComponent(
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
