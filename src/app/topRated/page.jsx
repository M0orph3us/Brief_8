import Cards from "@/components/Cards/Cards";
import { getTopRated } from "@/server/topRatedMovies";

export default async function TopRated() {
  const topRated = await getTopRated();
  return (
    <>
      <Cards data={topRated.results} />
    </>
  );
}
