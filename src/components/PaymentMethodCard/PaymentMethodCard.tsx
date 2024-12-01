import React from "react";
import styles from "./PaymentMethodCard.module.scss";
import Image from "next/image";
import PaymentOne from "../../assets/icons/dollar-1.svg";
import PaymentTwo from "../../assets/icons/dollar-2.svg";
import PaymentThree from "../../assets/icons/dollar-3.svg";
import clsx from "clsx";

type PaymentMethodCardVariant = "first" | "second" | "third";
type PaymentMethodCardObject = {
  imageUrl: any;
  number: number;
  text: string;
  range: number;
};

interface PaymentMethodCardProps {
  variant?: "primary" | "secondary";
  payment?: PaymentMethodCardVariant;
}

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
  variant = "primary",
  payment = "first",
}) => {
  const getPaymentMethodCardVariant = (payment: PaymentMethodCardVariant) => {
    const paymentMethodVariant: {
      [key in PaymentMethodCardVariant]: PaymentMethodCardObject;
    } = {
      first: {
        imageUrl: PaymentOne,
        number: 10,
        text: "pay when booking",
        range: 10,
      },
      second: {
        imageUrl: PaymentTwo,
        number: 40,
        text: "pay 30 days after booking",
        range: 40,
      },
      third: {
        imageUrl: PaymentThree,
        number: 50,
        text: "pay 60 days before trip",
        range: 100,
      },
    };

    return paymentMethodVariant[payment];
  };

  return (
    <div className={clsx([styles.payment_method_card, [styles[variant]]])}>
      <div className={styles.payment_method_card__dollar}>
        <Image
          src={getPaymentMethodCardVariant(payment).imageUrl}
          alt="payment"
        />
      </div>
      <h3>{getPaymentMethodCardVariant(payment).number}</h3>
      <p>{getPaymentMethodCardVariant(payment).text}</p>
      <div className={styles.payment_method_card__range}>
        <span
          style={{ width: `${getPaymentMethodCardVariant(payment).range}%` }}
        ></span>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
