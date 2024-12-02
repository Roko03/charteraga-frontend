import React from "react";
import styles from "./DestinationsSection.module.scss";
import Title from "@/components/Title";

const DestinationsSection = () => {
  return (
    <section className={styles.destinations_section}>
      <div className={styles.destinations_section__container}>
        <Title
          hasTagline
          taglineVariant={"secondary"}
          taglineTitle={"DESTINATIONS"}
          title={"Whether it’s a bash or bliss — the choice is yours"}
          description={
            "On our customized sailing adventures, embracing the thrill of our party routes or unwinding on our relaxing voyages — crafting your perfect journey at sea has never been easier"
          }
        />
      </div>
    </section>
  );
};

export default DestinationsSection;
