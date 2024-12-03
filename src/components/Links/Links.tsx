import Link from "next/link";
import React from "react";
import styles from "./Links.module.scss";
import clsx from "clsx";

interface LinksProps {
  variant?: "header" | "menu";
}

const Links: React.FC<LinksProps> = ({ variant = "header" }) => {
  return (
    <ul className={clsx(styles.link_list, [styles[variant]])}>
      <li>
        <Link href={"/destinations"}>Destinations</Link>
      </li>
      <li>
        <Link href={"/how-it-works"}>How it works</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link href={"/faq"}>FAQ</Link>
      </li>
    </ul>
  );
};

export default Links;
