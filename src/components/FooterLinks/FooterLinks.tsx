import Link from "next/link";
import React from "react";
import styles from "./FooterLinks.module.scss";

interface FooterLinksProps {
  title: string;
  linkArray: string[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, linkArray }) => {
  return (
    <div className={styles.footer_links}>
      <p>{title}</p>
      <ul>
        {linkArray.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link}>{link}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
