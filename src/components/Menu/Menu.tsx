import React from "react";
import styles from "./Menu.module.scss";
import clsx from "clsx";
import Links from "../Links";

interface MenuProps {
  isMenuOpen?: boolean;
  children?: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen = false, children }) => {
  return (
    <div className={clsx([styles.menu, { [styles.menu_open]: isMenuOpen }])}>
      <Links variant={"menu"} />
      {children}
    </div>
  );
};

export default Menu;
