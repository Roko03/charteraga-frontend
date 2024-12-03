import React, { PropsWithChildren } from "react";
import styles from "./Testimonial.module.scss";
import Image from "next/image";
import TestimonialImage from "../../assets/images/testimonials.png";

const Testimonial: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className={styles.testimonial}>
      <div className={styles.testimonial__header}></div>
      <Image
        src={TestimonialImage}
        alt="testimonial-image"
        className={styles.testimonial__image}
      />
      <div className={styles.testimonial__container}>
        <div className={styles.testimonial__children}>{children}</div>
      </div>
    </section>
  );
};

export default Testimonial;
