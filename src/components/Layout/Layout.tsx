import React, { PropsWithChildren } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps extends PropsWithChildren {
  variant?: "primary" | "secondary";
}

const Layout: React.FC<LayoutProps> = ({ children, variant = "primary" }) => {
  return (
    <>
      <Header variant={variant} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
