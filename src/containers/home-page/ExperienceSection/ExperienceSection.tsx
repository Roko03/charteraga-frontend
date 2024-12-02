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
        <Title
          hasTagline
          taglineVariant={"primary"}
          taglineTitle={"WELCOME"}
          title={"What is Charterag experience"}
          description={
            "Join us for a week of sailing, unique adventures and exclusive parties in stunning locations. Explore new places daily. Dive into local culture. Dance the nights away. Leave with new friends and lifelong memories."
          }
        />
        <ExperienceCardList />
      </div>
    </section>
  );
};

export default ExperienceSection;
