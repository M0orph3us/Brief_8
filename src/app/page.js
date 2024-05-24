import Caroussel from "@/components/Caroussel/Caroussel";
import {
  getTopRated,
  getPopularMovies,
  getUpcomingMovies,
} from "@/server/action";

export default async function Home() {
  const topRated = await getTopRated();
  const popular = await getPopularMovies();
  const upComing = await getUpcomingMovies();
  return (
    <main>
      <Caroussel title="Top Rated" results={topRated.results} />
      <Caroussel title="Popular" results={popular.results} />
      <Caroussel title="Up Comming" results={upComing.results} />
    </main>
  );
}
