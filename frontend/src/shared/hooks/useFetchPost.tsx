const fetchPosts = async (searchQuery: string) => {
  const response = await fetch(
    `http://localhost:3000/search/book?query=${searchQuery}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const result = await response.json();
  return result;
};

export default fetchPosts;
