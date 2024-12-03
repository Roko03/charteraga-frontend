import React from "react";
import styles from "./FooterLegalNotice.module.scss";
import Link from "next/link";

const FooterLegalNotice: React.FC = () => {
  return (
    <div className={styles.footer_legal_notice}>
      <span></span>
      <div className={styles.footer_legal_notice__box}>
        <p>
          Copyright © 2024 Charterag Ltd. (company no. 08245801) <br></br>Lorem
          ipsum dolor sit amet lorem ipsum ipsum, United Kingdom.
        </p>
        <ul>
          <li>
            <Link href={"/"}>Legal info</Link>
          </li>
          <li>
            <Link href={"/"}>Terms and conditions</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLegalNotice;
