import React from "react";
import styles from "./DestinationAccordionSection.module.scss";
import Title from "@/components/Title";

const DestinationAccordionSection: React.FC = () => {
  return (
    <section className={styles.destination_accordion_section}>
      <div className={styles.destination_accordion_section__container}>
        <Title
          hasTagline
          taglineTitle={"STEP 1."}
          taglineVariant={"secondary"}
          title="Choose your route"
          description="Explore what you can get for in each route"
        />
      </div>
    </section>
  );
};

export default DestinationAccordionSection;
