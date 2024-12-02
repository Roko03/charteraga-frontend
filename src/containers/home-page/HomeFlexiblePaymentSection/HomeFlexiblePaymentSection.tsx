import React from "react";
import styles from "./HomeFlexiblePaymentSection.module.scss";
import PaymentMethodCard from "@/components/PaymentMethodCard";
import Image from "next/image";
import PaymentTexture from "../../../assets/images/payment-texture.png";

const HomeFlexiblePaymentSection: React.FC = () => {
  return (
    <section className={styles.home_flexible_payment_section}>
      <Image
        src={PaymentTexture}
        alt="texture"
        className={styles.home_flexible_payment_section__texture}
      />
      <div className={styles.home_flexible_payment_section__container}>
        <h2 className={styles.home_flexible_payment_section__title}>
          Flexible payment
        </h2>
        <div className={styles.home_flexible_payment_section__list}>
          <PaymentMethodCard variant={"primary"} payment={"first"} />
          <PaymentMethodCard variant={"primary"} payment={"second"} />
          <PaymentMethodCard variant={"primary"} payment={"third"} />
        </div>
        <p className={styles.home_flexible_payment_section__description}>
          NOTE: Only applies to bookings made a minimum of 95 days before the
          trip. For bookings made within 95 days before the trip, see our{" "}
          <span>Terms and conditions</span>.
        </p>
      </div>
    </section>
  );
};

export default HomeFlexiblePaymentSection;
