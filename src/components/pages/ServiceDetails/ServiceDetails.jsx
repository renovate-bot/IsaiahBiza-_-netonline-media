import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import ServiceDetailsWrapper from "./ServiceDetailsWrapper";

function ServiceDetails() {
  return (
    <>
      <Breadcrumb pageName="Service Details" />
      <ServiceDetailsWrapper />
    </>
  );
}

export default ServiceDetails;
