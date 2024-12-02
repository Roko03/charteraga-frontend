import React from "react";
import styles from "./DestinationBannerSection.module.scss";
import DestinationBanner from "../DestinationBanner/DestinationBanner";
import DestinationCard from "../DestinationCard";

const DestinationBannerSection: React.FC = () => {
  return (
    <section className={styles.destination_banner_section}>
      <DestinationBanner />
      <div className={styles.destination_banner_section__container}>
        <div className={styles.destination_banner_section__detail}>
          <p>
            From mountains and canyons to fjord-like bays, nostalgic old towns
            to most stunning beaches. Get to now Croatia’s twin sister –
            Montenegro
          </p>
          <br></br>
          <p>
            Walk the medieval streets of Kotor, dine the most amazing seafood in
            the Fishermans village. Feel like a millionaire in Porto Montenegro,
            the most luxurious marina in this part of the World. Visit nostalgic
            old towns Perast, Risan and Herceg Novi. Hike mountains in Kotor.
            Get wild in Budva and Tivat. Relax in freshly opened, chic Lazure
            marina.
          </p>
        </div>
        <DestinationCard />
      </div>
    </section>
  );
};

export default DestinationBannerSection;
