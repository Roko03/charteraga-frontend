import React from "react";
import styles from "./DestinationHighlightSection.module.scss";
import DestinationHighlightsList from "../DestinationHighlightsList";

const DestinationHighlightSection: React.FC = () => {
  return (
    <section className={styles.destination_highlight_section}>
      <div className={styles.destination_highlight_section__container}>
        <h2 className={styles.destination_highlight_section__title}>
          Route Highlights
        </h2>
        <DestinationHighlightsList />
      </div>
    </section>
  );
};

export default DestinationHighlightSection;
