import React from "react";
import styles from "./ExperienceCardListItem.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ExperienceCardListItemProps {
  linkUrl?: string;
  imageUrl: StaticImageData;
  title: string;
}

const ExperienceCardListItem: React.FC<ExperienceCardListItemProps> = ({
  linkUrl = "/",
  imageUrl,
  title,
}) => {
  return (
    <Link href={linkUrl} className={styles.experience_card_item}>
      <div className={styles.experience_card_item__header}></div>
      <Image src={imageUrl} alt="experience_card_item" />
      <span>{title}</span>
    </Link>
  );
};

export default ExperienceCardListItem;
