import React from "react";
import DestinationBannerSection from "../DestinationBannerSection";
import DestinationHighlightSection from "../DestinationHighlightSection";
import DestinationAccordionSection from "../DestinationAccordionSection";
import DestinationCrewSection from "../DestinationCrewSection";
import DestinationPayAndSailSection from "../DestinationPayAndSailSection";
import Testimonial from "@/components/Testimonial";

const Destination = () => {
  return (
    <>
      <DestinationBannerSection />
      <DestinationHighlightSection />
      <DestinationAccordionSection />
      <DestinationCrewSection />
      <DestinationPayAndSailSection />
      <Testimonial>
        <h3>Ready to go?</h3>
      </Testimonial>
    </>
  );
};

export default Destination;
