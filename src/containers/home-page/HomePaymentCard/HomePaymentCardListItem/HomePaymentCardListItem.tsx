import React from "react";
import styles from "./HomePaymentCardListItem.module.scss";
import Image from "next/image";
import ListCheckIcon from "../../../../assets/icons/check-mark.svg";
import ListUnCheckIcon from "../../../../assets/icons/uncheck-mark.svg";

interface HomePaymentCardListItemProps {
  variant: "check" | "uncheck";
  title: string;
}

const HomePaymentCardListItem: React.FC<HomePaymentCardListItemProps> = ({
  variant = "check",
  title,
}) => {
  return (
    <li className={styles.home_payment_card_list_item}>
      <Image
        src={variant === "check" ? ListCheckIcon : ListUnCheckIcon}
        alt="icon-check"
        width={20.87}
        height={20.87}
      />
      {title}
    </li>
  );
};

export default HomePaymentCardListItem;
