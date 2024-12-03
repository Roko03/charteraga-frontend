"use client";
import React from "react";
import styles from "./HomeReviewsSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import HomeReviewsSlide from "./HomeReviewsSlide/HomeReviewsSlide";
import "./slider.scss";

const HomeReviewsSlider: React.FC = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={27}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={styles.home_reviews_slider}
    >
      <SwiperSlide>
        <HomeReviewsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <HomeReviewsSlide />
      </SwiperSlide>
      <SwiperSlide>
        <HomeReviewsSlide />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeReviewsSlider;
