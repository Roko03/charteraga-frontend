import React from "react";
import styles from "./DestinationCrewCard.module.scss";
import Image, { StaticImageData } from "next/image";
import Button from "@/design-system/Button";
import clsx from "clsx";

interface DestinationCrewCardProps {
  variant?: "primary" | "secondary";
  gallery: StaticImageData[];
  imageTitle: string;
  imageDescription: string;
  mainTitle: string;
  mainDescription: string;
  buttonText: string;
}

const DestinationCrewCard: React.FC<DestinationCrewCardProps> = ({
  variant = "primary",
  gallery,
  imageTitle,
  imageDescription,
  mainTitle,
  mainDescription,
  buttonText,
}) => {
  return (
    <div className={clsx([styles.destination_crew_card, [styles[variant]]])}>
      <div className={styles.destination_crew_card__main}>
        <Image src={gallery[0]} alt="image" />
        <h3>{imageTitle}</h3>
        <p>{imageDescription}</p>
      </div>
      <div className={styles.destination_crew_card__data}>
        <h2>{mainTitle}</h2>
        <p>{mainDescription}</p>
        <Button variant={"secondary"}>
          <p>{buttonText}</p>
        </Button>
      </div>
    </div>
  );
};

export default DestinationCrewCard;
