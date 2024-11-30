import React from "react";
import styles from "./TaglineBox.module.scss";
import clsx from "clsx";

type TaglineBoxVariant = "primary" | "secondary";

interface TaglineBoxProps {
  title: string;
  variant: TaglineBoxVariant;
}

const TaglineBox: React.FC<TaglineBoxProps> = ({
  title = "",
  variant = "primary",
}) => {
  const getTaglineColor = (variant: TaglineBoxVariant) => {
    const taglineColor: { [key in TaglineBoxVariant]: string } = {
      primary: styles.primary_tagline,
      secondary: styles.secondary_tagline,
    };

    return taglineColor[variant];
  };
  return (
    <span className={clsx([styles.tagline_box, getTaglineColor(variant)])}>
      {title}
    </span>
  );
};

export default TaglineBox;
