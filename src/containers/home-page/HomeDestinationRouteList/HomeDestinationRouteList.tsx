import React from "react";
import styles from "./HomeDestinationRouteList.module.scss";
import HomeDestinationRouteItem from "./HomeDestinationRouteItem";
import RouteImageOne from "../../../assets/images/party-route.png";
import RouteImageTwo from "../../../assets/images/ultra-route.png";
import RouteImageThree from "../../../assets/images/greece-route.png";
import RouteImageFour from "../../../assets/images/adventure-route.png";

const HomeDestinationRouteList: React.FC = () => {
  return (
    <div>
      <HomeDestinationRouteItem
        imageUrl={RouteImageOne}
        destinationTitle="Party"
        destinationPrice={710}
        destinationPartyAbility={75}
        destinationAdventureAbility={40}
      />
    </div>
  );
};

export default HomeDestinationRouteList;
