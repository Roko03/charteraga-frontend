import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {}

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}></div>
    </header>
  );
};

export default Header;
