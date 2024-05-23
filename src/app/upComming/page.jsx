import Cards from "@/components/Cards/Cards";
import { getUpcomingMovies } from "@/server/upcomingMovies";

export default async function UpComming() {
  const upCommingMovies = await getUpcomingMovies();
  return (
    <>
      <Cards data={upCommingMovies.results} />
    </>
  );
}
