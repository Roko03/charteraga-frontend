import React from "react";
import styles from "./DestinationSlide.module.scss";
import Image, { StaticImageData } from "next/image";

interface DestinationSlideProps {
  imageUrl: StaticImageData;
}

const DestinationSlide: React.FC<DestinationSlideProps> = ({ imageUrl }) => {
  return (
    <Image src={imageUrl} alt="image" className={styles.destination_slide} />
  );
};

export default DestinationSlide;
