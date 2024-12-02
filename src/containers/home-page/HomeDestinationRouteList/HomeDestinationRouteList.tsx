import React from "react";
import styles from "./HomeDestinationRouteList.module.scss";
import HomeDestinationRouteItem from "./HomeDestinationRouteItem";
import RouteImageOne from "../../../assets/images/party-route.png";
import RouteImageTwo from "../../../assets/images/ultra-route.png";
import RouteImageThree from "../../../assets/images/greece-route.png";
import RouteImageFour from "../../../assets/images/adventure-route.png";

const HomeDestinationRouteList: React.FC = () => {
  return (
    <div className={styles.home_destination_route_list}>
      <HomeDestinationRouteItem
        imageUrl={RouteImageOne}
        destinationTitle="Party"
        destinationPrice={710}
        destinationPartyAbility={75}
        destinationAdventureAbility={40}
      />
      <HomeDestinationRouteItem
        imageUrl={RouteImageTwo}
        destinationTitle="Ultra"
        destinationPrice={792}
        destinationPartyAbility={90}
        destinationAdventureAbility={25}
      />
      <HomeDestinationRouteItem
        imageUrl={RouteImageThree}
        destinationTitle="Greece"
        destinationPrice={710}
        destinationPartyAbility={40}
        destinationAdventureAbility={80}
      />
      <HomeDestinationRouteItem
        imageUrl={RouteImageFour}
        destinationTitle="Adventure"
        destinationPrice={792}
        destinationPartyAbility={10}
        destinationAdventureAbility={95}
      />
    </div>
  );
};

export default HomeDestinationRouteList;
