import React from "react";
import styles from "./ExperienceHighlightSection.module.scss";
import Title from "@/components/Title";
import ExperienceHighlightGallery from "../ExperienceHighlightGallery";
import ExperienceHighlightList from "../ExperienceHighlightList";

const ExperienceHighlightSection: React.FC = () => {
  return (
    <section className={styles.experience_higlight_section}>
      <div className={styles.experience_higlight_section__container}>
        <Title
          hasTagline={false}
          taglineVariant={"secondary"}
          title="Come live your best life"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam."
        />
        <ExperienceHighlightGallery />
        <ExperienceHighlightList />
      </div>
    </section>
  );
};

export default ExperienceHighlightSection;
