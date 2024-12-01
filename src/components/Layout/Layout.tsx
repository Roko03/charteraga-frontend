import React, { PropsWithChildren } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.scss";

interface LayoutProps extends PropsWithChildren {
  variant?: "primary" | "secondary";
}

const Layout: React.FC<LayoutProps> = ({ children, variant = "primary" }) => {
  return (
    <>
      <Header variant={variant} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
