import React from "react";
import styles from "./HomeCTASection.module.scss";
import Title from "@/components/Title";
import Button from "@/design-system/Button";
import Image from "next/image";
import InstagramIcon from "../../../assets/icons/instagram-blue.svg";

const HomeCTASection: React.FC = () => {
  return (
    <section className={styles.home_cta_section}>
      <div className={styles.home_cta_section__container}>
        <Title
          hasTagline={false}
          taglineVariant={"secondary"}
          title="Check Charterag off your bucket list"
          description="Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet"
        />
        <div className={styles.home_cta__buttons}>
          <Button className={styles.home_cta_first_button}>
            <p>EXPLORE</p>
          </Button>
          <Button className={styles.home_cta_second_button}>
            <p>EXPLORE</p>
            <Image src={InstagramIcon} alt="instagram" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeCTASection;
