import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/icons/logo.svg";
import FooterLinks from "../FooterLinks";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Link href={"/"}>
          <Image src={Logo} alt="logo" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
