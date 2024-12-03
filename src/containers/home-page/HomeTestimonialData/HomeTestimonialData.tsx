import React from "react";
import styles from "./HomeTestimonialData.module.scss";
import HomeReviewsSlider from "../HomeReviewsSlider";

const HomeTestimonialData: React.FC = () => {
  return (
    <div className={styles.home_testimonial_data}>
      <h3>Our guests loved it!</h3>
      <HomeReviewsSlider />
    </div>
  );
};

export default HomeTestimonialData;
