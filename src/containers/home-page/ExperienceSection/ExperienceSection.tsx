import React from "react";
import styles from "./ExperienceSection.module.scss";
import ExperienceRatingList from "../ExperienceRatingList";

const ExperienceSection = () => {
  return (
    <section className={styles.experience_section}>
      <ExperienceRatingList />
    </section>
  );
};

export default ExperienceSection;
