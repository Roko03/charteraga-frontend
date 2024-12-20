"use client";
import React from "react";
import Links from "../Links";
import Button from "@/design-system/Button";
import Link from "next/link";
import clsx from "clsx";
import Burger from "../Burger";
import Menu from "../Menu";
import useMenu from "@/hooks/useMenu";
import styles from "./Header.module.scss";

type HeaderVariant = "primary" | "secondary";

interface HeaderProps {
  variant?: HeaderVariant;
}

const Header: React.FC<HeaderProps> = ({ variant = "primary" }) => {
  const [isMenuOpen, toogleMenu, headerRef] = useMenu();

  return (
    <>
      <header
        ref={headerRef}
        className={clsx([styles.header, [styles[variant]]])}
      >
        <div className={styles.header__container}>
          <Link href={"/"} className={styles.header__logo}>
            <i className={styles.header__logo__icon}></i>
          </Link>
          <Links />
          <div className={styles.header__buttons}>
            <Link href={"/login"} className={styles.header__buttons__login}>
              Log in
            </Link>
            <Button className={styles.header__buttons__book}>Book now</Button>
          </div>
          <Burger
            variant={variant}
            isActive={isMenuOpen}
            onClick={toogleMenu}
          />
        </div>
      </header>
      <Menu isMenuOpen={isMenuOpen}>
        <div className={styles.menu_buttons}>
          <Link href={"/login"} className={styles.header__buttons__login}>
            Log in
          </Link>
          <Button className={styles.header__buttons__book}>Book now</Button>
        </div>
      </Menu>
    </>
  );
};

export default Header;
