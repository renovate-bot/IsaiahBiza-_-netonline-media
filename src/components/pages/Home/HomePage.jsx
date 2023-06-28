import React from "react";
import TestimonialArea from "../../common/TestimonialArea";
import AboutArea from "./AboutArea";
import HeroArea from "./HeroArea";
import LetsTalkArea from "../../common/LetsTalkArea";
import NewsLatterArea from "./NewsLatterArea";
import OurPartnerArea from "./OurPartnerArea";
import PortfolioArea from "./PortfolioArea";
import ServiceArea from "./ServiceArea";
import WhyChooseUsArea from "../../common/WhyChooseUsArea";

function HomePage() {
  return (
    <>
      <HeroArea />
      <ServiceArea />
      <AboutArea black="black" light="dark" />
      <OurPartnerArea />
      <PortfolioArea black="black" />
      <WhyChooseUsArea black="black" lable="" />
      <TestimonialArea />
      <NewsLatterArea black="black" />
      <LetsTalkArea />
    </>
  );
}

export default HomePage;
