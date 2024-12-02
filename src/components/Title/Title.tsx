import React from "react";
import styles from "./Title.module.scss";
import TaglineBox from "../TaglineBox";

const Title: React.FC = () => {
  return (
    <div className={styles.title}>
      <TaglineBox title={"WELCOME"} />
      <div className={styles.title__box}>
        <h2>What is Charterag experience</h2>
        <p>
          Join us for a week of sailing, unique adventures and exclusive parties
          in stunning locations. Explore new places daily. Dive into local
          culture. Dance the nights away. Leave with new friends and lifelong
          memories.
        </p>
      </div>
    </div>
  );
};

export default Title;
