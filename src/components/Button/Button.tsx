import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

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
        <div className={styles.button_secondary__arrow}></div>
      )}
    </button>
  );
};

export default Button;
