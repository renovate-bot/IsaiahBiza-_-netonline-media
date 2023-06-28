import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import CartFilter from "../../common/CartFilter";

function ProjectWrapper() {
  return (
    <>
      <section className="project-area sec-mar">
        <div className="container">
          <SRLWrapper>
            <CartFilter />
          </SRLWrapper>
        </div>
      </section>
    </>
  );
}

export default ProjectWrapper;
