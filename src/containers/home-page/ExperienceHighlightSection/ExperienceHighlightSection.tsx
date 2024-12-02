import React from "react";
import styles from "./ExperienceHighlightSection.module.scss";
import Title from "@/components/Title";
import ExperienceHighlightGallery from "../ExperienceHighlightGallery";
import ExperienceHighlightItem from "../ExperienceHighlightItem";
import Boat from "../../../assets/icons/boat.svg";
import SurferIcon from "../../../assets/icons/surfer.svg";
import CocktailIcon from "../../../assets/icons/cocktail.svg";

const ExperienceHighlightSection: React.FC = () => {
  return (
    <section className={styles.experience_higlight_section}>
      <Title
        hasTagline={false}
        taglineVariant={"secondary"}
        title="Come live your best life"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam."
      />
      <ExperienceHighlightGallery />
      <ExperienceHighlightItem
        highlightDescription="Spend unforgettable 7 days at sea with your crew at your own pace"
        highlightImageUrl={Boat}
        highlightTitle="A trip like no other"
      />
    </section>
  );
};

export default ExperienceHighlightSection;
