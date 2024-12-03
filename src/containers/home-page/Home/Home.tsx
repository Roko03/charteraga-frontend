import React from "react";
import BannerSection from "../BannerSection";
import ExperienceSection from "../ExperienceSection";
import DestinationsSection from "../DestinationsSection";
import Testimonial from "@/components/Testimonial";
import ExperienceHighlightSection from "../ExperienceHighlightSection";
import HomePaymentSection from "../HomePaymentSection";
import HomeFlexiblePaymentSection from "../HomeFlexiblePaymentSection";
import HomeCTASection from "../HomeCTASection";
import HomeTestimonialData from "../HomeTestimonialData";

const Home: React.FC = () => {
  return (
    <>
      <BannerSection />
      <ExperienceSection />
      <DestinationsSection />
      <Testimonial>
        <HomeTestimonialData />
      </Testimonial>
      <ExperienceHighlightSection />
      <HomePaymentSection />
      <HomeFlexiblePaymentSection />
      <HomeCTASection />
    </>
  );
};

export default Home;
