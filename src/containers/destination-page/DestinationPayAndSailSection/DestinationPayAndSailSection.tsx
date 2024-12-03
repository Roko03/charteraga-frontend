import React from "react";
import styles from "./DestinationPayAndSailSection.module.scss";
import Title from "@/components/Title";
import PaymentMethodCard from "@/components/PaymentMethodCard";
const DestinationPayAndSailSection: React.FC = () => {
  return (
    <section className={styles.pay_and_sail_section}>
      <Title
        hasTagline
        taglineTitle="STEP 3."
        taglineVariant={"secondary"}
        title="Pay and sail"
        description="We make it easy to split the cost between your crew and pay in instalments."
      />
      <div className={styles.pay_and_sail_list}>
        <PaymentMethodCard variant={"secondary"} payment={"first"} />
        <PaymentMethodCard variant={"secondary"} payment={"second"} />
        <PaymentMethodCard variant={"secondary"} payment={"third"} />
      </div>
    </section>
  );
};

export default DestinationPayAndSailSection;
