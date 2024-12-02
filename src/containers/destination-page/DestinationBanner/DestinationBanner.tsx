import React from "react";
import styles from "./DestinationBanner.module.scss";
import Image from "next/image";
import DestinationImage from "../../../assets/images/party-route.png";

const DestinationBanner: React.FC = () => {
  return (
    <div className={styles.destination_banner}>
      <Image
        src={DestinationImage}
        alt="destination-banner"
        className={styles.destination_banner__image}
      />
      <div className={styles.destination_banner__overlay}></div>
      <div className={styles.destination_banner__detail}>
        <span>party route</span>
        <h2>The best stories are yet to be told</h2>
      </div>
    </div>
  );
};

export default DestinationBanner;
