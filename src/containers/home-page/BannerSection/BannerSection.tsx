import React from "react";
import styles from "./BannerSection.module.scss";
import BannerVideo from "../BannerVideo";
import Image from "next/image";
import StarIcon from "../../../assets/icons/banner-star.svg";

const BannerSection: React.FC = () => {
  return (
    <section className={styles.banner_section}>
      <BannerVideo />
      <div className={styles.banner_section__text}>
        <p>Sail your way with</p>
        <h1>CHARTERAG</h1>
        <div className={styles.banner_section__text__icons}>
          <p>adventure</p>
          <Image src={StarIcon} alt="star" width={18} height={18} />
          <p>relax</p>
          <Image src={StarIcon} alt="star" width={18} height={18} />
          <p>explore</p>
          <Image src={StarIcon} alt="star" width={18} height={18} />
          <p>fun</p>
          <Image src={StarIcon} alt="star" width={18} height={18} />
          <p>dance</p>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
