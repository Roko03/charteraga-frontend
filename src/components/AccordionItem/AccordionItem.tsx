"use client";
import React, { PropsWithChildren, useState } from "react";
import styles from "./AccordionItem.module.scss";
import clsx from "clsx";

interface AccordionItemProps extends PropsWithChildren {
  title: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isAccordionOpen, setisAccordionOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <div
        className={styles.accordion__title}
        onClick={() => setisAccordionOpen(!isAccordionOpen)}
      >
        <span>{title}</span>
        <i
          className={clsx([
            styles.accordion__arrow_icon,
            { [styles.accordion_open_icon]: isAccordionOpen },
          ])}
        ></i>
      </div>
      <div
        className={clsx([
          styles.accordion__box,
          { [styles.accordion__box__active]: isAccordionOpen },
        ])}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
