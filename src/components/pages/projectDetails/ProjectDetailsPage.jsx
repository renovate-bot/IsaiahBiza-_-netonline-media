import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import ProjectProcess from "./ProjectProcess";
import ReletedProject from "./ReletedProject";

function ProjectDetailsPage() {
  return (
    <>
      <Breadcrumb pageName="Project Details" />
      <div className="project-details-area sec-mar">
        <div className="container">
          <ProjectProcess />
          <ReletedProject />
        </div>
      </div>
    </>
  );
}

export default ProjectDetailsPage;
