import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "../../assets/icons/logo.svg";
import Links from "../Links";
import Button from "@/design-system/Button";
import Link from "next/link";
import clsx from "clsx";

type HeaderVariant = "primary" | "secondary";

interface HeaderProps {
  variant?: HeaderVariant;
}

const Header: React.FC<HeaderProps> = ({ variant = "primary" }) => {
  return (
    <header className={clsx([styles.header, [styles[variant]]])}>
      <div className={styles.header__container}>
        <Link href={"/"} className={styles.header__logo}>
          <Image src={Logo} alt="logo" />
        </Link>
        <Links />
        <div className={styles.header__buttons}>
          <Link href={"/login"} className={styles.header__buttons__login}>
            Log in
          </Link>
          <Button className={styles.header__buttons__book}>Book now</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
