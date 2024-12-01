import React, { PropsWithChildren } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.scss";
import clsx from "clsx";

interface LayoutProps extends PropsWithChildren {
  variant?: "primary" | "secondary";
}

const Layout: React.FC<LayoutProps> = ({ children, variant = "primary" }) => {
  return (
    <>
      <Header variant={variant} />
      <main className={clsx([styles.main, [styles[variant]]])}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
