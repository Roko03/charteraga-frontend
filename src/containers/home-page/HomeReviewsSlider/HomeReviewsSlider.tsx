"use client";
import React from "react";
import styles from "./HomeReviewsSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import HomeReviewsSlide from "./HomeReviewsSlide/HomeReviewsSlide";
import "./slider.scss";
import ProfileImage from "../../../assets/images/profile.png";

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
        <HomeReviewsSlide
          imageUrl={ProfileImage}
          username="Courtney Henry"
          grade={4}
          title="Amazing experience"
          description="Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla."
        />
      </SwiperSlide>
      <SwiperSlide>
        <HomeReviewsSlide
          imageUrl={ProfileImage}
          username="Courtney Henry"
          grade={4}
          title="Amazing experience"
          description="Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla."
        />
      </SwiperSlide>
      <SwiperSlide>
        <HomeReviewsSlide
          imageUrl={ProfileImage}
          username="Courtney Henry"
          grade={4}
          title="Amazing experience"
          description="Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla."
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeReviewsSlider;
