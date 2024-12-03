"use client";
import React, { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.scss";
import Image from "next/image";
import ArrowUp from "../../assets/icons/arrow-up.svg";
import clsx from "clsx";

const ScrollToTop: React.FC = () => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  return (
    <div
      className={clsx([
        styles.scroll_box,
        { [styles.scroll_box_visible]: isScrollVisible },
      ])}
      onClick={scrollToTop}
    >
      <Image src={ArrowUp} alt="arrow-up" height={14} width={18} />
    </div>
  );
};

export default ScrollToTop;
