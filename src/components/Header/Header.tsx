import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "../../assets/icons/logo.svg";
import Links from "../Links";

interface HeaderProps {}

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Image src={Logo} alt="logo" />
        </div>
        <Links />
      </div>
    </header>
  );
};

export default Header;
