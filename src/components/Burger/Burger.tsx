import React from "react";
import styles from "./Burger.module.scss";
import clsx from "clsx";

interface BurgerProps {
  variant?: "primary" | "secondary";
  isActive?: boolean;
  onClick?: () => void;
}

const Burger: React.FC<BurgerProps> = ({
  variant = "primary",
  isActive = false,
  onClick = undefined,
}) => {
  console.log(isActive);
  return (
    <div
      onClick={onClick}
      className={clsx([
        styles.burger,
        { [styles.burger_active]: isActive },
        [styles[variant]],
      ])}
    >
      <span></span>
    </div>
  );
};

export default Burger;
