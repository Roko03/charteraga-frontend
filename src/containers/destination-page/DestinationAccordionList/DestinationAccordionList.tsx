import React from "react";
import styles from "./DestinationAccordionList.module.scss";
import AccordionItem from "@/components/AccordionItem";
import PartyImage from "../../../assets/images/party-route.png";
import UltraImage from "../../../assets/images/ultra-route.png";
import GreeceImage from "../../../assets/images/greece-route.png";
import AdventureImage from "../../../assets/images/adventure-route.png";
import DestinationAccordionData, {
  AccordionAbilityItem,
} from "../DestinationAccordionData/DestinationAccordionData";

const DestinationAccordionList: React.FC = () => {
  const abilityArray: AccordionAbilityItem[] = [
    {
      abilityNumber: 100,
      name: "Organised parties",
    },
    {
      abilityNumber: 0,
      name: "Wine",
    },
    {
      abilityNumber: 100,
      name: "Sailweek Regatta",
    },
    {
      abilityNumber: 20,
      name: "Island hopping",
    },
    {
      abilityNumber: 70,
      name: "Swim Stops",
    },
    {
      abilityNumber: 20,
      name: "Exploring cities",
    },
    {
      abilityNumber: 40,
      name: "Sightseeing",
    },
    {
      abilityNumber: 70,
      name: "Cliff jumping",
    },
    {
      abilityNumber: 0,
      name: "Local cuisine",
    },
  ];

  return (
    <div className={styles.accorion_list}>
      <AccordionItem title="Ultra Route">
        <DestinationAccordionData
          imageUrl={UltraImage}
          abilities={abilityArray}
        />
      </AccordionItem>
      <AccordionItem title="Party Route">
        <DestinationAccordionData
          imageUrl={PartyImage}
          abilities={abilityArray}
        />
      </AccordionItem>
      <AccordionItem title="Greece Route">
        <DestinationAccordionData
          imageUrl={GreeceImage}
          abilities={abilityArray}
        />
      </AccordionItem>
      <AccordionItem title="Adventure Route">
        <DestinationAccordionData
          imageUrl={AdventureImage}
          abilities={abilityArray}
        />
      </AccordionItem>
    </div>
  );
};

export default DestinationAccordionList;
