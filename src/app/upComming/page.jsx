import Cards from "@/components/Cards/Cards";
import { getUpcomingMovies } from "@/server/action";

export default async function UpComming() {
  const upCommingMovies = await getUpcomingMovies();
  return <Cards data={upCommingMovies.results} />;
}
