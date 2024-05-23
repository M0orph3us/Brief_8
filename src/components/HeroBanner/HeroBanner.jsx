import Image from "next/image";
import "./heroBanner.css";
import { getPopularMovies } from "@/server/popularMovies";

export default async function HeroBanner() {
  const popularMovie = await getPopularMovies();
  const mostPopular = popularMovie.results[0];
  return (
    <>
      <Image
        className="img-banner"
        src={`https://image.tmdb.org/t/p/original${mostPopular["backdrop_path"]}`}
        width={500}
        height={300}
        quality={100}
        alt={`image of ${mostPopular["title"]}`}
        priority={true}
      />
    </>
  );
}
