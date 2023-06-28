import React from "react";
import LetsTalkArea from "../../common/LetsTalkArea";
import TestimonialArea from "../../common/TestimonialArea";
import WhyChooseUsArea from "../../common/WhyChooseUsArea";
import HeroArea from "../Home/HeroArea";
import NewsLatterArea from "../Home/NewsLatterArea";
import OurPartnerArea from "../Home/OurPartnerArea";
import PortfolioArea from "../Home/PortfolioArea";
import ServiceArea from "../Home/ServiceArea";
import About2Area from "./About2Area";

function HomePage2(props) {
  return (
    <>
      <HeroArea />
      <ServiceArea />
      <About2Area />
      <OurPartnerArea />
      <PortfolioArea black="" />
      <WhyChooseUsArea black="" light="dark" lable="progressbar-label" />
      <TestimonialArea />
      <NewsLatterArea />
      <LetsTalkArea />
    </>
  );
}

export default HomePage2;
