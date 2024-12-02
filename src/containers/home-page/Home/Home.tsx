import React from "react";
import BannerSection from "../BannerSection";
import ExperienceSection from "../ExperienceSection";
import DestinationsSection from "../DestinationsSection";
import Testimonial from "@/components/Testimonial";

const Home: React.FC = () => {
  return (
    <>
      <BannerSection />
      <ExperienceSection />
      <DestinationsSection />
      <Testimonial>
        <h3>Our guests loved it!</h3>
      </Testimonial>
    </>
  );
};

export default Home;
