"use server";

import Cards from "@/components/Cards/Cards";

export async function searchMovie(query) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await res.json();

  return console.log(response);
}
