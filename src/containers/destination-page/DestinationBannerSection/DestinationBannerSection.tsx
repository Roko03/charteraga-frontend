import React from "react";
import styles from "./DestinationBannerSection.module.scss";
import DestinationBanner from "../DestinationBanner/DestinationBanner";
import DestinationCard from "../DestinationCard";
import { RouteType } from "@/types/types";

interface DestinationBannerSectionProps {
  data: RouteType;
}

const DestinationBannerSection: React.FC<DestinationBannerSectionProps> = ({
  data,
}) => {
  return (
    <section className={styles.destination_banner_section}>
      <DestinationBanner data={data} />
      <div className={styles.destination_banner_section__container}>
        <div className={styles.destination_banner_section__detail}>
          <p>{data.description}</p>
        </div>
        <DestinationCard />
      </div>
    </section>
  );
};

export default DestinationBannerSection;
