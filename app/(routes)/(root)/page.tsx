
import { getHomeDiscs } from "@/actions/getHomeDiscs";
import { ExploreDiscs } from "./components";
import { ListDiscs } from "@/components/Shared";


export default async function Home() {
  const listDiscs = await getHomeDiscs();

  return (
    <div >
      <ExploreDiscs />
      {/* <ListDiscs title={"Top Discos"} discs={listDiscs} /> */}
      <ListDiscs title={"Los Discos más escuchados"} discs={null} />
    </div>
  );
}
