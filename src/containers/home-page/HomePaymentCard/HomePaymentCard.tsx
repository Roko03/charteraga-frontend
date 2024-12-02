import React from "react";
import styles from "./HomePaymentCard.module.scss";
import clsx from "clsx";
import Image from "next/image";
import ListCheckIcon from "../../../assets/icons/check-mark.svg";
import ListUnCheckIcon from "../../../assets/icons/uncheck-mark.svg";

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
        <li>
          <Image
            src={ListCheckIcon}
            alt="icon-check"
            width={20.87}
            height={20.87}
          />
          Icon
        </li>
        <li>
          <Image
            src={ListCheckIcon}
            alt="icon-check"
            width={20.87}
            height={20.87}
          />
          Icon
        </li>
        <li>
          <Image
            src={ListCheckIcon}
            alt="icon-check"
            width={20.87}
            height={20.87}
          />
          Icon
        </li>
        <li>
          <Image
            src={ListUnCheckIcon}
            alt="icon-uncheck"
            width={20.87}
            height={20.87}
          />
          Icon
        </li>
      </ul>
    </div>
  );
};

export default HomePaymentCard;
