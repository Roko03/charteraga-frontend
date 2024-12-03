import React from "react";
import styles from "./ExperienceRatingList.module.scss";
import ExperienceRatingListItem from "./ExperienceRatingListItem";
import StarIcon from "../../../assets/icons/star.svg";
import FacebookIcon from "../../../assets/icons/facebook.svg";
import GoogleIcon from "../../../assets/icons/google.svg";

const ExperienceRatingList: React.FC = () => {
  return (
    <div className={styles.experience_rating_list}>
      <ExperienceRatingListItem
        iconUrl={StarIcon}
        text={"Based on 325 reviews"}
        rate={"4.8"}
      />
      <ExperienceRatingListItem
        iconUrl={FacebookIcon}
        text={"Based on 325 reviews"}
        rate={"4.8"}
      />
      <ExperienceRatingListItem
        iconUrl={GoogleIcon}
        text={"Based on 325 reviews"}
        rate={"4.8"}
      />
    </div>
  );
};

export default ExperienceRatingList;
