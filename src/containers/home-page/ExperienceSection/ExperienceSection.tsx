import React from "react";
import styles from "./ExperienceSection.module.scss";
import ExperienceRatingList from "../ExperienceRatingList";

const ExperienceSection = () => {
  return (
    <section className={styles.experience_section}>
      <div className={styles.experience_section__container}>
        <ExperienceRatingList />
      </div>
    </section>
  );
};

export default ExperienceSection;
