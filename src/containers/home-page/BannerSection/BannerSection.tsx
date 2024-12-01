import React from "react";
import styles from "./BannerSection.module.scss";

const BannerSection: React.FC = () => {
  return (
    <section className={styles.banner_section}>
      <div className={styles.banner_section__text}>
        <p>Sail your way with</p>
        <h1>CHARTERAG</h1>
        <div></div>
      </div>
    </section>
  );
};

export default BannerSection;
