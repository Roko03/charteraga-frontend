import React from "react";
import styles from "./ExperienceSection.module.scss";
import ExperienceRatingList from "../ExperienceRatingList";
import ExperienceCardList from "../ExperienceCardList";
import Title from "@/components/Title";

const ExperienceSection: React.FC = () => {
  return (
    <section className={styles.experience_section}>
      <div className={styles.experience_section__container}>
        <ExperienceRatingList />
        <Title />
        <ExperienceCardList />
      </div>
    </section>
  );
};

export default ExperienceSection;
