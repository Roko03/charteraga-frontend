import React from "react";
import styles from "./HomePaymentSection.module.scss";
import Title from "@/components/Title";
import HomePaymentCard from "../HomePaymentCard";

const HomePaymentSection: React.FC = () => {
  return (
    <section className={styles.home_payment_section}>
      <div className={styles.home_payment_section__container}>
        <Title
          hasTagline
          taglineTitle={"PAYMENT"}
          taglineVariant={"third"}
          title="You don’t have to break the bank"
          description="See how lorem ipsum dolor sit"
        />
        <div className={styles.home_payment_section__options}>
          <HomePaymentCard
            hasDetailSpan
            price={787}
            variant={"primary"}
            title="Sailweek experience"
          />
          <HomePaymentCard
            variant={"secondary"}
            title="Individual experience"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePaymentSection;
