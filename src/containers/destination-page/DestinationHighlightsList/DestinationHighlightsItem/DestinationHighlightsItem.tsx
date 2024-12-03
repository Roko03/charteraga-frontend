import React from "react";
import styles from "./DestinationHighlightsItem.module.scss";
import Image, { StaticImageData } from "next/image";

interface DestinationHighlightsItemProps {
  imageUrl: StaticImageData;
  title: string;
  description: string;
}

const DestinationHighlightsItem: React.FC<DestinationHighlightsItemProps> = ({
  title,
  imageUrl,
  description,
}) => {
  return (
    <div className={styles.highlights_item}>
      <Image
        src={imageUrl}
        alt="image"
        className={styles.highlights_item__image}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default DestinationHighlightsItem;
