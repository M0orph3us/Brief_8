"use server";

import Image from "next/image";
import "./detail.css";

export default async function Detail({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.detail}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = await res.json();
  return (
    <div className="detail-container">
      <h1>{result.title}</h1>
      <Image
        src={`https://image.tmdb.org/t/p/w500${result["backdrop_path"]}`}
        width={0}
        height={0}
        alt={`image of ${result["title"]}`}
        priority={true}
      />
    </div>
  );
}
