import React from "react";
import styles from "./HomeCTAGallery.module.scss";
import Image from "next/image";
import CTAImageOne from "../../../assets/images/cta-image-0.png";
import CTAImageTwo from "../../../assets/images/cta-image-1.png";
import CTAImageThree from "../../../assets/images/cta-image-2.png";

const HomeCTAGallery = () => {
  return (
    <div className={styles.home_cta_gallery}>
      <Image
        src={CTAImageOne}
        alt="image-one"
        className={styles.home_cta_gallery__first}
      />
      <Image
        src={CTAImageTwo}
        alt="image-two"
        className={styles.home_cta_gallery__second}
      />
      <Image
        src={CTAImageThree}
        alt="image-three"
        className={styles.home_cta_gallery__third}
      />
    </div>
  );
};

export default HomeCTAGallery;
