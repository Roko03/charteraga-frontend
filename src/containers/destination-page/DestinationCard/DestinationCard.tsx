import React from "react";
import styles from "./DestinationCard.module.scss";
import Image from "next/image";
import Button from "@/design-system/Button";
import StarIcon from "../../../assets/icons/square-star.svg";
import BoatIcon from "../../../assets/icons/boat.svg";
import PeopleIcon from "../../../assets/icons/people.svg";
import AgeRangeIcon from "../../../assets/icons/age-range.svg";
import WifiIcon from "../../../assets/icons/wifi.svg";
import CalendarIcon from "../../../assets/icons/calendar.svg";

const DestinationCard: React.FC = () => {
  return (
    <div className={styles.destination_card}>
      <h3>Dubrovnik party route</h3>
      <div className={styles.destination_card__rating}>
        <Image src={StarIcon} alt="star" />
        <span>4.9</span>
        rating of 401 reviews
      </div>
      <ul>
        <li>
          <Image src={BoatIcon} alt="icon" width={32} height={32} />
          Party vibe
        </li>
        <li>
          <Image src={PeopleIcon} alt="icon" width={32} height={32} />
          Up to 40 people
        </li>
        <li>
          <Image src={AgeRangeIcon} alt="icon" width={32} height={32} />
          20 - 40 age range
        </li>
        <li>
          <Image src={WifiIcon} alt="icon" width={32} height={32} />
          Free WiFi
        </li>
        <li>
          <Image src={CalendarIcon} alt="icon" width={32} height={32} />
          July | August
        </li>
      </ul>
      <Button variant={"cardButton"}>BOOK NOW</Button>
      <p className={styles.destination_card__bottom}>
        Prices from €1136 per person
      </p>
    </div>
  );
};

export default DestinationCard;
