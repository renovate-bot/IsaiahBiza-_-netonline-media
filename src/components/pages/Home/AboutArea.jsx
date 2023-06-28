import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";

function AboutArea() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const Singlepercentage = 85;
  const singleXmPercentage = 68;
  return (
    <>
      <section className="about-area sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="about-left">
                <div className="title black">
                  <span>About Us</span>
                  <h2 className="mb-15">Results Driven.</h2>
                </div>
                <p>
                Netonline Media is a dynamic and innovative digital agency committed to delivering exceptional results for businesses in the ever-evolving online landscape. With a team of skilled professionals, we specialize in crafting tailored digital strategies that drive brand visibility, engage audiences, and maximize conversions. Our comprehensive suite of services includes website design and development, search engine optimization, social media management, content creation, and digital advertising. We pride ourselves on staying ahead of the curve, utilizing the latest technologies and industry trends to ensure our clients stay at the forefront of their respective industries. At Netonline Media, we are dedicated to delivering measurable and tangible results that help businesses thrive in the digital age 
                </p>
                <div className="our-mission">
                  <div className="msn-icon">
                    <i>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/mission-icon.png"
                        }
                        alt="images"
                      />
                    </i>
                  </div>
                  <div className="msn-content">
                    <h5>Our Mission</h5>
                    <p>
                    At Netonline Media, our mission is to empower businesses and individuals by harnessing the power of digital technology. We strive to be the leading digital agency that helps our clients thrive in the online realm. 
                    </p>
                  </div>
                  <div className="cto">
                    <img
                      src={process.env.PUBLIC_URL + "/images/ctoFounder.png"}
                      alt="imgs"
                    />
                  </div>
                </div>
                <div className="cmn-btn">
                  <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/about`}>About more</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="about-right">
                <div className="group-images">
                  <img
                    src={process.env.PUBLIC_URL + "/images/about-bottom.jpg"}
                    alt="images"
                  />
                  <div className="about-top">
                    <img
                      src={process.env.PUBLIC_URL + "/images/about-top.png"}
                      alt="images"
                    />
                  </div>
                  <div className="about-skills">
                    <div className="signle-skill">
                      <CircularProgressbar
                        value={Singlepercentage}
                        text={`${Singlepercentage}%`}
                        className="progress-bar-circle"
                      />
                      <div className="skill-content">
                        <h6>SEO</h6>
                        <p>Rankings</p>
                      </div>
                    </div>
                    <div className="signle-skill xsm">
                      <CircularProgressbar
                        value={singleXmPercentage}
                        text={`${singleXmPercentage}%`}
                        className="progress-bar-circle"
                      />
                      <div className="skill-content">
                        <h6>Web Development</h6>
                        <p>Developing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="features-count">
            <div className="row">
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count">
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/count-1.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={250} delay={2} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Projects Completed</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count">
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/count-2.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={150} delay={1} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Trusted Across the Globe</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count">
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/count-3.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={150} delay={3} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Expert Teams</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count xsm">
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/count-4.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={100} delay={4} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Win Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutArea;
