import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";
type ButtonVariant = "primary" | "secondary" | "cardButton";

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
      cardButton: styles.button_card,
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
          <i className={styles.button_secondary__arrow__image}></i>
        </div>
      )}
    </button>
  );
};

export default Button;
