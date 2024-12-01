import React from "react";
import styles from "./BannerSection.module.scss";
import video from "../../../assets/video/banner-video.mp4";

const BannerSection: React.FC = () => {
  return (
    <section className={styles.banner_section}>
      <video src={video} autoPlay muted loop />
    </section>
  );
};

export default BannerSection;
