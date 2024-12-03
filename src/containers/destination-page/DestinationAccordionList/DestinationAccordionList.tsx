import React from "react";
import styles from "./DestinationAccordionList.module.scss";
import AccordionItem from "@/components/AccordionItem";
import PartyImage from "../../../assets/images/party-route.png";
import UltraImage from "../../../assets/images/ultra-route.png";
import GreeceImage from "../../../assets/images/greece-route.png";
import AdventureImage from "../../../assets/images/adventure-route.png";
import DestinationAccordionData from "../DestinationAccordionData/DestinationAccordionData";

const DestinationAccordionList: React.FC = () => {
  return (
    <div className={styles.accorion_list}>
      <AccordionItem title="Ultra Route">
        <DestinationAccordionData imageUrl={UltraImage} />
      </AccordionItem>
      <AccordionItem title="Party Route">
        <DestinationAccordionData imageUrl={PartyImage} />
      </AccordionItem>
      <AccordionItem title="Greece Route">
        <DestinationAccordionData imageUrl={GreeceImage} />
      </AccordionItem>
      <AccordionItem title="Adventure Route">
        <DestinationAccordionData imageUrl={AdventureImage} />
      </AccordionItem>
    </div>
  );
};

export default DestinationAccordionList;
