import React from "react";
import styles from "./ExperienceRatingListItem.module.scss";
import Image from "next/image";

interface ExperienceRatingListItemProps {
  iconUrl: string;
  rate: string;
  text: string;
}

const ExperienceRatingListItem: React.FC<ExperienceRatingListItemProps> = ({
  iconUrl,
  rate,
  text,
}) => {
  return (
    <div className={styles.experience_rating_item}>
      <Image src={iconUrl} alt="experience-icon" />
      <div className={styles.experience_rating_item__box}>
        <span>{rate} / 5</span>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ExperienceRatingListItem;
