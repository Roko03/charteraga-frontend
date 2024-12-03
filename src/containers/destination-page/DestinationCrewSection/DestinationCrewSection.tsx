import React from "react";
import styles from "./DestinationCrewSection.module.scss";
import Title from "@/components/Title";
import DestinationCrewCard from "../DestinationCrewCard";
import { StaticImageData } from "next/image";
import ImageOne from "../../../assets/images/solo-cabin.png";
import ImageTwo from "../../../assets/images/calamaran.png";
import ImageThree from "../../../assets/images/skipper-host.png";

const DestinationCrewSection: React.FC = () => {
  const galleryArray: StaticImageData[] = [ImageOne, ImageTwo, ImageThree];
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
        buttonText="Compare cabins"
      />
      <DestinationCrewCard
        variant={"secondary"}
        gallery={galleryArray}
        imageTitle="Catamaran"
        imageDescription="Twin hulled boat - for those who travel in style"
        mainTitle="Catamaran or Monohull"
        mainDescription="Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc."
        buttonText="Compare yachts"
      />
      <DestinationCrewCard
        variant={"primary"}
        gallery={galleryArray}
        imageTitle="Skipper"
        imageDescription="Lorem ipsum dolor sit amet consectetur"
        mainTitle="Skipper and Host"
        mainDescription="Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc."
        buttonText="About us "
      />
    </section>
  );
};

export default DestinationCrewSection;
