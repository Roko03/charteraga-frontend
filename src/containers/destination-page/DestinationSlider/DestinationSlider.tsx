"use client";
import React from "react";
import styles from "./DestinationSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./slider.scss";
import DestinationSlide from "./DestinationSlide/DestinationSlide";
import { StaticImageData } from "next/image";

interface DestinationSliderProps {
  gallery: StaticImageData[];
}

const DestinationSlider: React.FC<DestinationSliderProps> = ({ gallery }) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.destination_slider}
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={index}>
            <DestinationSlide imageUrl={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DestinationSlider;
