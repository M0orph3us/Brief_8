import Cards from "@/components/Cards/Cards";
import { getTopRated } from "@/server/action";

export default async function TopRated() {
  const topRated = await getTopRated();
  return <Cards data={topRated.results} />;
}
