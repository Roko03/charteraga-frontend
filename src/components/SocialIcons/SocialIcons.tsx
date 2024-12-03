import React from "react";
import styles from "./SocialIcons.module.scss";
import InstagramIcon from "../../assets/icons/instagram-main.svg";
import FacebookIcon from "../../assets/icons/facebook-main.svg";
import YoutubeIcon from "../../assets/icons/youtube-main.svg";
import Image from "next/image";

const SocialIcons: React.FC = () => {
  return (
    <ul className={styles.social_icons}>
      <li className={styles.social_icons__icon}>
        <a href="instagram.com">
          <Image src={InstagramIcon} alt="instagram" width={21} height={21} />
        </a>
      </li>
      <li className={styles.social_icons__icon}>
        <a href="facebook.com">
          <Image src={FacebookIcon} alt="facebook" width={21} height={21} />
        </a>
      </li>
      <li className={styles.social_icons__icon}>
        <a href="youtube.com">
          <Image src={YoutubeIcon} alt="youtube" width={21} height={21} />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
