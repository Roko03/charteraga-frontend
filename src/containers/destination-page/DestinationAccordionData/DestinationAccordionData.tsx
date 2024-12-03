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
  abilities: AccordionAbilityItem[];
}

const DestinationAccordionData: React.FC<DestinationAccordionDataProps> = ({
  imageUrl,
  abilities,
}) => {
  return (
    <div className={styles.accordion_data}>
      <Image src={imageUrl} alt="accordion-image" />
      <div className={styles.accordion_data__abilities}>
        {abilities.map((ability, index) => {
          return (
            <div className={styles.accordion_data__abilities_item} key={index}>
              <p>{ability.name}</p>
              <RangeComponent
                rangeNumber={ability.abilityNumber}
                color="#1DC072"
                backgroundColor="#d2d2e2"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DestinationAccordionData;
