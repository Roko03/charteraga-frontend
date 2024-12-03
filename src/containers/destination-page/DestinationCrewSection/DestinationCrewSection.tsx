import React from "react";
import styles from "./DestinationCrewSection.module.scss";
import Title from "@/components/Title";

const DestinationCrewSection: React.FC = () => {
  return (
    <section className={styles.destination_crew_section}>
      <Title
        hasTagline
        taglineTitle="STEP 2."
        taglineVariant={"secondary"}
        title="Choose your crew"
        description="Lorem ipsum dolor sit amet"
      />
    </section>
  );
};

export default DestinationCrewSection;
