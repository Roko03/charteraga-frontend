import React from "react";
import styles from "./ExperienceHighlightGallery.module.scss";
import ImageOne from "../../../assets/images/list-image-0.png";
import ImageTwo from "../../../assets/images/list-image-1.png";
import ImageThree from "../../../assets/images/list-image-2.png";
import ImageFour from "../../../assets/images/list-image-3.png";
import ImageFive from "../../../assets/images/list-image-4.png";
import ImageSix from "../../../assets/images/list-image-5.png";
import ImageSeven from "../../../assets/images/list-image-6.png";
import ImageEight from "../../../assets/images/list-image-7.png";
import Image, { StaticImageData } from "next/image";

interface ExperienceHighlightGalleryItemProps {
  imageUrl: StaticImageData;
}

const ExperienceHighlightGalleryItem: React.FC<
  ExperienceHighlightGalleryItemProps
> = ({ imageUrl }) => {
  return (
    <Image
      src={imageUrl}
      alt={"image"}
      className={styles.experience_higlight_gallery_item}
    />
  );
};

const ExperienceHighlightGallery: React.FC = () => {
  const galleryArray: StaticImageData[] = [
    ImageOne,
    ImageTwo,
    ImageThree,
    ImageFour,
    ImageFive,
    ImageSix,
    ImageSeven,
    ImageEight,
  ];
  return (
    <div className={styles.experience_higlight_gallery}>
      {galleryArray.map((item, index) => {
        return <ExperienceHighlightGalleryItem imageUrl={item} key={index} />;
      })}
    </div>
  );
};

export default ExperienceHighlightGallery;
