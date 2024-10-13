const fetchPosts = async (
  searchQuery: string,
  display: number = 1,
  start: number = 1,
  sort: string = "sim"
) => {
  const response = await fetch(
    `http://localhost:3000/search/book?query=${searchQuery}&display=${display}&start=${start}&sort=${sort}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const result = await response.json();
  return result;
};

export default fetchPosts;
