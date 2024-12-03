import React from "react";
import DestinationBannerSection from "../DestinationBannerSection";
import DestinationHighlightSection from "../DestinationHighlightSection";
import DestinationAccordionSection from "../DestinationAccordionSection";
import DestinationCrewSection from "../DestinationCrewSection";
import DestinationPayAndSailSection from "../DestinationPayAndSailSection";
import Testimonial from "@/components/Testimonial";
import DestinationCTA from "../DestinationCTA";
import { RouteType } from "@/types/types";

interface DestinationProps {
  data: RouteType;
}

const Destination: React.FC<DestinationProps> = ({ data }) => {
  return (
    <>
      <DestinationBannerSection data={data} />
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
