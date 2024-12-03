import React from "react";
import styles from "./BannerVideo.module.scss";

const BannerVideo: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__header}></div>
      <video
        src={"banner-video.mp4"}
        autoPlay
        muted
        loop
        className={styles.banner__video}
      />
      <div className={styles.banner__footer}></div>
    </div>
  );
};

export default BannerVideo;
