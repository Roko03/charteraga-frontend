import React from "react";
import styles from "./BannerSection.module.scss";

const BannerSection: React.FC = () => {
  return (
    <section className={styles.banner_section}>
      <div className={styles.banner}>
        <div className={styles.banner__header}></div>
        <video
          src={require("../../../assets/video/banner-video.mp4")}
          autoPlay
          muted
          loop
          className={styles.banner__video}
        />
        <div className={styles.banner__footer}></div>
      </div>
    </section>
  );
};

export default BannerSection;
