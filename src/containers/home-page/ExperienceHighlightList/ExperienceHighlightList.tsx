import React from "react";
import styles from "./ExperienceHighlightList.module.scss";
import ExperienceHighlightItem from "../ExperienceHighlightItem";
import BoatIcon from "../../../assets/icons/boat.svg";
import SurferIcon from "../../../assets/icons/surfer.svg";
import CocktailIcon from "../../../assets/icons/cocktail.svg";

const ExperienceHighlightList = () => {
  return (
    <div className={styles.experience_higlight_list}>
      <ExperienceHighlightItem
        highlightDescription="Spend unforgettable 7 days at sea with your crew at your own pace"
        highlightImageUrl={BoatIcon}
        highlightTitle="A trip like no other"
      />
      <ExperienceHighlightItem
        highlightDescription="Indulge yourself in dozen of parties and activities on your trip"
        highlightImageUrl={SurferIcon}
        highlightTitle="Active vacations"
      />
      <ExperienceHighlightItem
        highlightDescription="Meet people from all over the world, discover new friends"
        highlightImageUrl={CocktailIcon}
        highlightTitle="Bonding"
      />
    </div>
  );
};

export default ExperienceHighlightList;
