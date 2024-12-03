import React from "react";
import styles from "./HomeReviewsSlide.module.scss";
import Image, { StaticImageData } from "next/image";
import StarIcon from "../../../../assets/icons/star-yellow.svg";

interface HomeReviewsSlideProps {
  imageUrl: StaticImageData;
  username: string;
  grade: number;
  title: string;
  description: string;
}

const HomeReviewsSlide: React.FC<HomeReviewsSlideProps> = ({
  imageUrl,
  username,
  grade = 1,
  title,
  description,
}) => {
  return (
    <div className={styles.home_review_slide}>
      <div className={styles.home_review_slide__profile}>
        <Image src={imageUrl} alt="image-profile" width={80} height={80} />
      </div>
      <span>{username}</span>
      <div className={styles.home_review_slide__grade}>
        {Array.from({ length: grade }).map((_, index) => {
          return <Image src={StarIcon} alt="star" key={index} />;
        })}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default HomeReviewsSlide;
