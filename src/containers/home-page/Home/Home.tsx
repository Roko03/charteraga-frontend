import React from "react";
import BannerSection from "../BannerSection";
import ExperienceSection from "../ExperienceSection";
import DestinationsSection from "../DestinationsSection";
import Testimonial from "@/components/Testimonial";
import ExperienceHighlightSection from "../ExperienceHighlightSection";
import HomePaymentSection from "../HomePaymentSection";
import HomeFlexiblePaymentSection from "../HomeFlexiblePaymentSection";
import HomeCTASection from "../HomeCTASection";

const Home: React.FC = () => {
  return (
    <>
      <BannerSection />
      <ExperienceSection />
      <DestinationsSection />
      <Testimonial>
        <h3>Our guests loved it!</h3>
      </Testimonial>
      <ExperienceHighlightSection />
      <HomePaymentSection />
      <HomeFlexiblePaymentSection />
      <HomeCTASection />
    </>
  );
};

export default Home;
