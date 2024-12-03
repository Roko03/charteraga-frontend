import React from "react";
import styles from "./HomeDestinationRouteItem.module.scss";
import Link from "next/link";
import Image from "next/image";
import RangeComponent from "@/components/RangeComponent/RangeComponent";
import ArrowRight from "../../../../assets/icons/arrow.svg";

interface HomeDestinationRouteItemProps {
  destinationId: number;
  imageUrl: string;
  destinationTitle: string;
  destinationPrice: number;
  destinationPartyAbility?: number;
  destinationAdventureAbility?: number;
}

const HomeDestinationRouteItem: React.FC<HomeDestinationRouteItemProps> = ({
  destinationId,
  imageUrl,
  destinationTitle,
  destinationPrice,
  destinationPartyAbility = null,
  destinationAdventureAbility = null,
}) => {
  console.log(imageUrl);
  return (
    <Link
      href={`/destination/${destinationId}`}
      className={styles.home_destination_route}
    >
      <Image
        src={imageUrl}
        fill
        alt="destination-image"
        className={styles.home_destination_route__banner}
      />
      <div className={styles.home_destination_route__overlay}></div>
      <div className={styles.home_destination_route__detail}>
        <div className={styles.home_destination_route__main}>
          <p>From €{destinationPrice}/person</p>
          <span className={styles.home_destination_route__flex}>
            <h2>{destinationTitle} Route</h2>
            <Image src={ArrowRight} alt="arrow-right" />
          </span>
        </div>
        <div className={styles.home_destination_route__ability}>
          {destinationPartyAbility && (
            <div className={styles.home_destination_route__ability__item}>
              <p>Party</p>
              <RangeComponent rangeNumber={destinationPartyAbility} />
            </div>
          )}
          {destinationAdventureAbility && (
            <div className={styles.home_destination_route__ability__item}>
              <p>Adventure</p>
              <RangeComponent rangeNumber={destinationAdventureAbility} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default HomeDestinationRouteItem;
