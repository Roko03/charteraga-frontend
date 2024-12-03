import React from "react";
import styles from "./HomePaymentCard.module.scss";
import clsx from "clsx";
import HomePaymentCardListItem from "./HomePaymentCardListItem";

interface HomePaymentCardProps {
  hasDetailSpan?: boolean;
  variant?: "primary" | "secondary";
  title: string;
  price?: number;
}

const HomePaymentCard: React.FC<HomePaymentCardProps> = ({
  hasDetailSpan = false,
  variant = "primary",
  title,
  price = null,
}) => {
  return (
    <div className={clsx([styles.home_payment_card, [styles[variant]]])}>
      <div className={styles.home_payment_card__detail}>
        <span>{title}</span>
        {hasDetailSpan && (
          <div className={styles.home_payment_card__detail__span}>
            <p>from {price}€</p>
          </div>
        )}
      </div>
      <ul>
        <HomePaymentCardListItem variant={"check"} title="experience" />
        <HomePaymentCardListItem variant={"check"} title="lorem ipsum dolor" />
        <HomePaymentCardListItem variant={"uncheck"} title="dolor sit et" />
        <HomePaymentCardListItem variant={"check"} title="et santi dolor sum" />
      </ul>
    </div>
  );
};

export default HomePaymentCard;
