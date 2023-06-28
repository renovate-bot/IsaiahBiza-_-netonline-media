import React from "react";
import { Link } from "react-router-dom";

function WhatWeDoArea() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="service-area sec-pad">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-12 col-lg-4 col-xl-4">
              <div className="title">
                <span>what we do</span>
                <h2>
Our Work Speaks Volumes on Its Own.</h2>
                <div className="cmn-btn">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/service`}
                  >
                    view all services
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-8">
              <div className="row g-4">
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    <span className="count">01</span>
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-1.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>web development</h4>
                      <p>
                      At our core, we excel in the art of web development, skillfully creating dynamic and user-friendly websites that are custom-tailored to perfectly suit your individual requirements.
                      </p>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/service-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    <span className="count">02</span>
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-2.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>Ecommerce Websites</h4>
                      <p>
                      We take immense pride in meticulously designing our packages to ensure a seamless shopping journey for your customers, right from the initial browse to a secure checkout.
                      </p>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/service-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    <span className="count">03</span>
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-3.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>SEO</h4>
                      <p>
                      We will enhance your online presence and generate organic traffic with our professional SEO services. We unlock the potential of your website and elevate your rankings.
                      </p>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/service-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    <span className="count">04</span>
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-4.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>Reputation Management</h4>
                      <p>
                      We offer a range of services encompassing vigilant monitoring, strategic planning, and proactive management dedicated to safeguarding your brand's reputation.
                      </p>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/service-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            {/* </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="single-service">
                <span className="count">05</span>
                <div className="service-icon">
                  <i>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/service-icon-5.png"
                      }
                      alt="images"
                    />
                  </i>
                </div>
                <div className="service-content">
                  <h4>Video Animation</h4>
                  <p>
                    interger purus adio, placerat ni in, ullamcorper nec dolor.
                  </p>
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/service-details`}
                  >
                    read more
                    <i>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/arrow-circle.png"
                        }
                        alt="images"
                      />
                    </i>
                  </Link>
                </div>
              </div> */}
            {/* </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="single-service">
                <span className="count">06</span>
                <div className="service-icon">
                  <i>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/service-icon-6.png"
                      }
                      alt="images"
                    />
                  </i>
                </div>
                <div className="service-content">
                  <h4>3D Design</h4>
                  <p>
                    interger purus adio, placerat ni in, ullamcorper nec dolor.
                  </p>
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/service-details`}
                  >
                    read more
                    <i>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/arrow-circle.png"
                        }
                        alt="images"
                      />
                    </i>
                  </Link>
                </div>
              </div> */}
            {/* </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="single-service">
                <span className="count">07</span>
                <div className="service-icon">
                  <i>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/service-icon-7.png"
                      }
                      alt="images"
                    />
                  </i>
                </div>
                <div className="service-content">
                  <h4>UI/UX Design</h4>
                  <p>
                    interger purus adio, placerat ni in, ullamcorper nec dolor.
                  </p>
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/service-details`}
                  >
                    read more
                    <i>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/arrow-circle.png"
                        }
                        alt="images"
                      />
                    </i>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatWeDoArea;
