import Caroussel from "@/components/Caroussel/Caroussel";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import { getTopRated } from "@/server/topRatedMovies.js";
import { getPopularMovies } from "@/server/popularMovies.js";
import { getUpcomingMovies } from "@/server/upcomingMovies";

export default async function Home() {
  const topRated = await getTopRated();
  const popular = await getPopularMovies();
  const upComing = await getUpcomingMovies();
  return (
    <>
      <HeroBanner />
      <Caroussel results={topRated.results} />
      <Caroussel results={popular.results} />
      <Caroussel results={upComing.results} />
    </>
  );
}
