import React from "react";
import styles from "./ExperienceSection.module.scss";
import ExperienceRatingList from "../ExperienceRatingList";
import TaglineBox from "@/components/TaglineBox";
import ExperienceCardList from "../ExperienceCardList";

const ExperienceSection: React.FC = () => {
  return (
    <section className={styles.experience_section}>
      <div className={styles.experience_section__container}>
        <ExperienceRatingList />
        <TaglineBox title={"WELCOME"} />
        <div className={styles.experience_section__text}>
          <h2>What is Charterag experience</h2>
          <p>
            Join us for a week of sailing, unique adventures and exclusive
            parties in stunning locations. Explore new places daily. Dive into
            local culture. Dance the nights away. Leave with new friends and
            lifelong memories.
          </p>
        </div>
        <ExperienceCardList />
      </div>
    </section>
  );
};

export default ExperienceSection;
