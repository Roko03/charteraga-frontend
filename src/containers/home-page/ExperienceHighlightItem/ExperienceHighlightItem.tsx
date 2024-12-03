import React from "react";
import styles from "./ExperienceHighlightItem.module.scss";
import Image from "next/image";

interface ExperienceHighlightItemProps {
  highlightImageUrl: string;
  highlightTitle: string;
  highlightDescription: string;
}

const ExperienceHighlightItem: React.FC<ExperienceHighlightItemProps> = ({
  highlightImageUrl,
  highlightTitle,
  highlightDescription,
}) => {
  return (
    <div className={styles.highlight_item}>
      <div className={styles.highlight_item__header}>
        <Image
          src={highlightImageUrl}
          alt="highlight-icon"
          width={26}
          height={26}
        />
        <span>{highlightTitle}</span>
      </div>
      <p>{highlightDescription}</p>
    </div>
  );
};

export default ExperienceHighlightItem;
