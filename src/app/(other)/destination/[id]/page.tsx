import Destination from "@/containers/destination-page/Destination";
import { getRouteById } from "@/lib/getRouteById";
import { RouteType } from "@/types/types";

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const data: RouteType = await getRouteById((await params).id);

  return <Destination data={data} />;
}
