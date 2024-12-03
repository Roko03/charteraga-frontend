import React from "react";
import styles from "./HomeDestinationRouteList.module.scss";
import HomeDestinationRouteItem from "./HomeDestinationRouteItem";
import { getRoute } from "@/lib/getRoute";

export const dynamic = "force-dynamic";

const HomeDestinationRouteList: React.FC = async () => {
  const routes = await getRoute();

  return (
    <div className={styles.home_destination_route_list}>
      {routes.map((route) => {
        return (
          <HomeDestinationRouteItem
            key={route.id}
            destinationId={route.id}
            imageUrl={route.imageUrl}
            destinationTitle={route.name}
            destinationPrice={route.price}
            destinationPartyAbility={route.mainAbilities[0].range}
            destinationAdventureAbility={route.mainAbilities[0].range}
          />
        );
      })}
    </div>
  );
};

export default HomeDestinationRouteList;
