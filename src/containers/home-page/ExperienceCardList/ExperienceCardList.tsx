import React from "react";
import styles from "./ExperienceCardList.module.scss";
import ExperienceCardListItem from "./ExperienceCardListItem/ExperienceCardListItem";
import SailImage from "../../../assets/images/sail.png";
import PartyImage from "../../../assets/images/party.png";
import ExploreImage from "../../../assets/images/explore.png";
import RelaxImage from "../../../assets/images/relax.png";

const ExperienceCardList: React.FC = () => {
  return (
    <div className={styles.experience_card_list}>
      <ExperienceCardListItem imageUrl={SailImage} title={"Sail"} />
      <ExperienceCardListItem imageUrl={PartyImage} title={"Party"} />
      <ExperienceCardListItem imageUrl={ExploreImage} title={"Explore"} />
      <ExperienceCardListItem imageUrl={RelaxImage} title={"Relax"} />
    </div>
  );
};

export default ExperienceCardList;
