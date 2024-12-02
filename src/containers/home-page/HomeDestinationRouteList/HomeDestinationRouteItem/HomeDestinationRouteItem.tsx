import React from "react";
import styles from "./HomeDestinationRouteItem.module.scss";
import Link from "next/link";
import Image from "next/image";
const HomeDestinationRouteItem: React.FC = () => {
  return (
    <Link href={"/destination"} className={styles.home_destination_route_item}>
      <Image src={"/"} alt="destination-image" />
      <div className={styles.home_destination_route_item__detail}>
        <div className={styles.home_destination_route_item__main}>
          <p>From €710/person </p>
          <h2>Party Route</h2>
        </div>
        <div className={styles.home_destination_route_item__ability}></div>
      </div>
    </Link>
  );
};

export default HomeDestinationRouteItem;
