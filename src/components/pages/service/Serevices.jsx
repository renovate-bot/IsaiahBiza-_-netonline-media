import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import LetsTalkArea from "../../common/LetsTalkArea";
import HowWeWorkArea from "./HowWeWorkArea";
import ServicePrice from "./ServicePrice";
import WhatWeDoArea from "./WhatWeDoArea";

function ServicesPage() {
  return (
    <>
      <Breadcrumb pageName="Service" />
      <WhatWeDoArea />
      <HowWeWorkArea />
      <ServicePrice />
      <LetsTalkArea />
    </>
  );
}

export default ServicesPage;
