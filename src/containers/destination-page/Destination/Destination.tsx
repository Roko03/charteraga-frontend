"use client";
import React from "react";
import DestinationBannerSection from "../DestinationBannerSection";
import DestinationHighlightSection from "../DestinationHighlightSection";
import DestinationAccordionSection from "../DestinationAccordionSection";
import DestinationCrewSection from "../DestinationCrewSection";
import DestinationPayAndSailSection from "../DestinationPayAndSailSection";
import Testimonial from "@/components/Testimonial";
import DestinationCTA from "../DestinationCTA";
import { useParams } from "next/navigation";

const Destination = () => {
  const params = useParams<{ id: string }>();

  return (
    <>
      <DestinationBannerSection />
      <DestinationHighlightSection />
      <DestinationAccordionSection />
      <DestinationCrewSection />
      <DestinationPayAndSailSection />
      <Testimonial>
        <DestinationCTA />
      </Testimonial>
    </>
  );
};

export default Destination;
