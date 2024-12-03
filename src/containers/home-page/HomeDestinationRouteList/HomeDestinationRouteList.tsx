import React from "react";
import styles from "./HomeDestinationRouteList.module.scss";
import HomeDestinationRouteItem from "./HomeDestinationRouteItem";
import { promises as fs } from "fs";
import path from "path";
import { RouteType } from "@/types/types";

export const dynamic = "force-dynamic";

const HomeDestinationRouteList: React.FC = async () => {
  const filePath = path.join(process.cwd(), "/charteraga.json");
  const file = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(file);
  const dataRoutes: RouteType[] = data.routes;

  return (
    <div className={styles.home_destination_route_list}>
      {dataRoutes.map((route) => {
        return (
          <HomeDestinationRouteItem
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
