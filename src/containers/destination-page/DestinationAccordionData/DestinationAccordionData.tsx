import React from "react";
import styles from "./DestinationAccordionData.module.scss";
import Image, { StaticImageData } from "next/image";
import RangeComponent from "@/components/RangeComponent/RangeComponent";

export type AccordionAbilityItem = {
  name: string;
  abilityNumber: number;
};

interface DestinationAccordionDataProps {
  imageUrl: StaticImageData;
  abilities?: AccordionAbilityItem[];
}

const DestinationAccordionData: React.FC<DestinationAccordionDataProps> = ({
  imageUrl,
}) => {
  return (
    <div className={styles.accordion_data}>
      <Image src={imageUrl} alt="accordion-image" />
      <div className={styles.accordion_data__abilities}>
        <div className={styles.accordion_data__abilities_item}>
          <p>Organised parties</p>
          <RangeComponent rangeNumber={100} color="#1DC072" />
        </div>
      </div>
    </div>
  );
};

export default DestinationAccordionData;
