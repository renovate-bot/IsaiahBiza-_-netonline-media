import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import LetsTalkArea from "../../common/LetsTalkArea";
import TestimonialArea from "../../common/TestimonialArea";
import WhyChooseUsArea from "../../common/WhyChooseUsArea";
import AboutArea from "../Home/AboutArea";
import InsideStoryArea from "./InsideStoryArea";
import LatesNewsArea from "./LatesNewsArea";

function AboutPage() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Breadcrumb pageName="about" />
      <InsideStoryArea />
      <AboutArea />
      <TestimonialArea />
      <WhyChooseUsArea black="black" lable="" />
      <LatesNewsArea />
      <LetsTalkArea />
    </>
  );
}

export default AboutPage;
