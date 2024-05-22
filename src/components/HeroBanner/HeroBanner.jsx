import Image from "next/image";
import "./heroBanner.css";
import { getUpcomingMovies } from "@/server/upcomingMovies";

export default async function HeroBanner() {
  const upcomming = await getUpcomingMovies();
  const upcommingResults = upcomming.results[0];
  return (
    <>
      <Image
        className="img-banner"
        src={`https://image.tmdb.org/t/p/w500${upcommingResults["backdrop_path"]}`}
        width={200}
        height={113}
        quality={100}
        alt={`image of ${upcommingResults["title"]}`}
        priority={true}
      />
    </>
  );
}
