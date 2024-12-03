import Destination from "@/containers/destination-page/Destination";
import { getRouteById } from "@/lib/getRouteById";
import { RouteType } from "@/types/types";

export default async function DestinationPage({
  params,
}: {
  params: { id: string };
}) {
  const data: RouteType = await getRouteById(params.id);

  return <Destination data={data} />;
}
