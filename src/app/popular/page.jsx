import Cards from "@/components/Cards/Cards";
import { getPopularMovies } from "@/server/popularMovies";

export default async function Popular() {
  const popularMovies = await getPopularMovies();
  return (
    <>
      <Cards data={popularMovies.results} />
    </>
  );
}
