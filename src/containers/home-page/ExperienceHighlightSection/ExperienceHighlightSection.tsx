import React from "react";
import styles from "./ExperienceHighlightSection.module.scss";
import Title from "@/components/Title";

const ExperienceHighlightSection: React.FC = () => {
  return (
    <section>
      <Title
        hasTagline={false}
        taglineVariant={"secondary"}
        title="Come live your best life"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam."
      />
    </section>
  );
};

export default ExperienceHighlightSection;
