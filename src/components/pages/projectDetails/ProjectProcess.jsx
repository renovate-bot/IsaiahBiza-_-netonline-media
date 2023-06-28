import React from "react";

function ProjectProcess() {
  return (
    <>
      <div className="project-process">
        <div className="row justify-content-between">
          <div className="col">
            <div className="process-step">
              <h4>Client:</h4>
              <span>Caye Pepe</span>
            </div>
          </div>
          <div className="col">
            <div className="process-step">
              <h4>Services:</h4>
              <span>Ecommerce Web Development</span>
            </div>
          </div>
          <div className="col">
            <div className="process-step">
              <h4>Website:</h4>
              <span>https://cayepepe.co.uk</span>
            </div>
          </div>
          <div className="col">
            <div className="process-step">
              <h4>Start Date:</h4>
              <span>09.09.2022</span>
            </div>
          </div>
          <div className="col">
            <div className="process-step">
              <h4>end Date:</h4>
              <span>01.10.2022</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="process-banner">
              <img
                src={process.env.PUBLIC_URL + "/images/process-banner.jpg"}
                alt="images"
              />
            </div>
          </div>
        </div>
        <div className="project-overview">
          <h3>OVERVIEW</h3>
          <div className="row">
            <div className="col-md-5 col-lg-5 col-xl-5">
              <div className="overview-img">
                <img
                  src={process.env.PUBLIC_URL + "/images/overview-1.jpg"}
                  alt="images"
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-7 col-xl-7">
              <div className="overview-content">
                <h3>Our Client Work Brief</h3>
                <p>
                This Client Work Brief outlines the essential details and requirements for a completed ecommerce web development project commissioned by Netonline Media. The objective was to create a robust, user-friendly, and visually appealing online store to enhance Caye Pepe's digital presence and facilitate seamless customer experiences.
Caye Pepe sought to establish an ecommerce platform that showcases their diverse range of pepper products. The website would serve as an online storefront, allowing customers to explore, purchase, and manage their orders efficiently. The platform would provide an intuitive user interface, robust security features, and integration with various payment gateways.

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-overview right">
          <h3>PROJECT PROCESS</h3>
          <div className="row">
            <div className="col-md-6 col-lg-3 col-xl-3 or4">
              <div className="project-single-step">
                <h4>04. Developing</h4>
                <div className="project-step-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/project/project-single-step-4.jpg"
                    }
                    alt="images"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 or3">
              <div className="project-single-step">
                <h4>03. UI Design</h4>
                <div className="project-step-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/project/project-single-step-3.jpg"
                    }
                    alt="images"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 or2">
              <div className="project-single-step">
                <h4>02. Wireframe</h4>
                <div className="project-step-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/project/project-single-step-2.jpg"
                    }
                    alt="images"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 or1">
              <div className="project-single-step">
                <h4>01. Brainstorming</h4>
                <div className="project-step-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/project/project-single-step-1.jpg"
                    }
                    alt="images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-overview">
          <h3>Check &amp; launch</h3>
          <div className="row">
            <div className="col-md-7 col-lg-7 col-xl-7 or2">
              <div className="overview-content">
                <p>
                To ensure a flawless online shopping experience for Caye Pepe, our digital agency followed a thorough 'Check & Launch' process.

First, our team conducted a comprehensive review of the entire website, meticulously examining each page, feature, and functionality. We verified that all product listings, categories, and payment gateways are integrated accurately and functioning as intended. Our experts also scrutinized the user interface and experience, ensuring intuitive navigation and responsiveness across different devices.

Next, we conducted rigorous testing to identify and rectify any potential bugs, glitches, or performance issues. This included compatibility testing across various web browsers and mobile devices, as well as stress testing to evaluate the website's capacity to handle a high volume of concurrent users. We also tested the checkout process to guarantee a smooth and secure transaction flow.

                </p>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-xl-5 or1">
              <div className="overview-img">
                <img
                  src={process.env.PUBLIC_URL + "/images/overview-2.jpg"}
                  alt="images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectProcess;
