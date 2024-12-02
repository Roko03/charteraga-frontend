import React from "react";
import styles from "./PaymentMethodCard.module.scss";
import Image from "next/image";
import PaymentOne from "../../assets/icons/dollar-1.svg";
import PaymentTwo from "../../assets/icons/dollar-2.svg";
import PaymentThree from "../../assets/icons/dollar-3.svg";
import clsx from "clsx";
import RangeComponent from "../RangeComponent/RangeComponent";

type PaymentMethodCardVariant = "first" | "second" | "third";
type PaymentMethodDetails = {
  icon: any;
  paymentTitle: number;
  label: string;
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
      [key in PaymentMethodCardVariant]: PaymentMethodDetails;
    } = {
      first: {
        icon: PaymentOne,
        paymentTitle: 10,
        label: "pay when booking",
        range: 10,
      },
      second: {
        icon: PaymentTwo,
        paymentTitle: 40,
        label: "pay 30 days after booking",
        range: 40,
      },
      third: {
        icon: PaymentThree,
        paymentTitle: 50,
        label: "pay 60 days before trip",
        range: 100,
      },
    };

    return paymentMethodVariant[payment];
  };

  return (
    <div className={clsx([styles.payment_method_card, [styles[variant]]])}>
      <div className={styles.payment_method_card__dollar}>
        <Image src={getPaymentMethodCardVariant(payment).icon} alt="payment" />
      </div>
      <h3>{getPaymentMethodCardVariant(payment).paymentTitle}%</h3>
      <p>{getPaymentMethodCardVariant(payment).label}</p>
      <RangeComponent
        rangeNumber={getPaymentMethodCardVariant(payment).range}
        color="#1DC072"
      />
    </div>
  );
};

export default PaymentMethodCard;
