import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/icons/logo.svg";
import FooterLinks from "../FooterLinks";
import SocialIcons from "../SocialIcons";
import FooterLegalNotice from "../FooterLegalNotice";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Link href={"/"} className={styles.footer__logo}>
          <Image src={Logo} alt="logo" />
        </Link>
        <div className={styles.footer__links}>
          <FooterLinks
            title={"Programs"}
            linkArray={["program", "program", "program"]}
          />
          <FooterLinks
            title={"Programs"}
            linkArray={["program", "program", "program"]}
          />
          <FooterLinks
            title={"Programs"}
            linkArray={["program", "program", "program"]}
          />
        </div>
        <div className={styles.footer__social}>
          <SocialIcons />
        </div>
      </div>
      <FooterLegalNotice />
    </footer>
  );
};

export default Footer;
