import React from "react";
import styles from "./DestinationCrewSection.module.scss";
import Title from "@/components/Title";
import DestinationCrewCard from "../DestinationCrewCard";
import { StaticImageData } from "next/image";
import ImageOne from "../../../assets/images/solo-cabin.png";

const DestinationCrewSection: React.FC = () => {
  const galleryArray: StaticImageData[] = [ImageOne];
  return (
    <section className={styles.destination_crew_section}>
      <Title
        hasTagline
        taglineTitle="STEP 2."
        taglineVariant={"secondary"}
        title="Choose your crew"
        description="Lorem ipsum dolor sit amet"
      />
      <DestinationCrewCard
        gallery={galleryArray}
        imageTitle="Solo"
        imageDescription="Book a single spot and share a bunk bed cabin with a person of the same gender. We have a lot of single travelers just like you. "
        mainTitle="Solo, Cabin or Group of Friends"
        mainDescription="Solo, with a friend or with the whole crew, we got it all covered! Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc."
        buttonText="Compare cabins "
      />
    </section>
  );
};

export default DestinationCrewSection;
