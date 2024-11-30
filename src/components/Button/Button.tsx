import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import Image from "next/image";
import ArrowRight from "../../assets/icons/arrow.svg";
import styles from "./Button.module.scss";
import sprite from "../../assets/sprite.svg";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  onClick,
}) => {
  const getButtonVariant = (variant: ButtonVariant) => {
    const buttonVariants: { [key in ButtonVariant]: string } = {
      primary: styles.button_primary,
      secondary: styles.button_secondary,
    };

    return buttonVariants[variant];
  };

  return (
    <button
      onClick={onClick}
      className={clsx([styles.button, getButtonVariant(variant), className])}
    >
      {children}
      {variant === "secondary" && (
        <div className={styles.button_secondary__arrow}>
          <svg className={styles.arrow}>
            <use href={`${sprite}#arrow`} />
          </svg>
        </div>
      )}
    </button>
  );
};

export default Button;
