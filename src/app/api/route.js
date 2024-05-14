export async function getData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}
