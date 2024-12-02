import React from "react";
import styles from "./Title.module.scss";
import TaglineBox from "../TaglineBox";
import { TaglineBoxVariant } from "../TaglineBox/TaglineBox";
import clsx from "clsx";

interface TitleProps {
  hasTagline: boolean;
  taglineTitle?: string;
  taglineVariant?: TaglineBoxVariant;
  title: string;
  description: string;
}

const Title: React.FC<TitleProps> = ({
  hasTagline = false,
  taglineTitle = "WELCOME",
  taglineVariant = "primary",
  title,
  description,
}) => {
  return (
    <div className={styles.title}>
      {hasTagline && (
        <TaglineBox title={taglineTitle} variant={taglineVariant} />
      )}
      <div className={clsx([styles.title__box, [styles[taglineVariant]]])}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Title;
