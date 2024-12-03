import React from "react";
import styles from "./DestinationBanner.module.scss";
import Image from "next/image";
import { RouteType } from "@/types/types";

interface DestinationBannerProps {
  data: RouteType;
}

const DestinationBanner: React.FC<DestinationBannerProps> = ({ data }) => {
  return (
    <div className={styles.destination_banner}>
      <Image
        src={data.imageUrl}
        alt="destination-banner"
        fill
        className={styles.destination_banner__image}
      />
      <div className={styles.destination_banner__overlay}></div>
      <div className={styles.destination_banner__detail}>
        <span>{data.name} Route</span>
        <h2>{data.subtitle}</h2>
      </div>
    </div>
  );
};

export default DestinationBanner;
