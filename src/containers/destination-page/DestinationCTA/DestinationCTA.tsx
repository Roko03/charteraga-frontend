import React from "react";
import styles from "./DestinationCTA.module.scss";
import Button from "@/design-system/Button";

const DestinationCTA: React.FC = () => {
  return (
    <div className={styles.destination_cta}>
      <h3>Ready to go?</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio
        amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc.
      </p>
      <Button variant={"secondary"}>
        <span className={styles.button_text}>Explore our destinations</span>
      </Button>
    </div>
  );
};

export default DestinationCTA;
