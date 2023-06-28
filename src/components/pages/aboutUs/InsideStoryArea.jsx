import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles } from "react-circular-progressbar";

function InsideStoryArea() {
  const Singlepercentage = 90;
  const singleXmPercentage = 95;
  const singleXmlPercentage = 88;
  const circlebar = {
    text: {
      fill: "#f88",
      fontSize: "16px",
    },
  };
  return (
    <>
      <section className="about-area sec-mar">
        <div className="container">
          <div className="out-story">
            <div className="row">
              <div className="col-lg-6 col-xl-6">
                <div className="story-left">
                  <div className="office-group-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/story.png"}
                      alt="images"
                    />
                    <div className="cto-message-wrapper">
                      <div className="cto-message">
                        <p>
                        Dear Valued Clients and Partners, since our inception in 2015, we have been dedicated to helping businesses like yours thrive in the digital landscape. We are committed to deliver results that exceed your expectations.
                        </p>
                        <h4>
                          Isaiah Bizabani. <span>CEO &amp; FOUNDER, Netonline Media Limited</span>
                        </h4>
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/cto-signature.png"
                          }
                          alt="images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6">
                <div className="story-right">
                  <div className="title black">
                    <span>Inside Story</span>
                    <h2 className="mb-15">
                    We Assist Business Growth by Unleashing the Potential of Premium Digital Solutions.
                    </h2>
                  </div>
                  <p>
                  Netonline Media, a leading digital agency based in Chessington, UK, commenced its operations in 2015. With a strong focus on delivering exceptional services, the agency has become a trusted partner for businesses seeking expertise in SEO, web development, ecommerce web development, and online reputation management.
                  </p>
                  <div className="story-skills">
                    <div className="story-skill">
                      <CircularProgressbar
                        {...circlebar}
                        valueStart={0}
                        styles={buildStyles({
                          pathTransition:
                            Singlepercentage === 0
                              ? "none"
                              : "stroke-dashoffset 0.5s ease 0s",
                        })}
                        strokeWidth={1}
                        value={Singlepercentage}
                        text={`${Singlepercentage}%`}
                        className="progress-bar-circle"
                      />

                      <span>Idea &amp; Research</span>
                    </div>
                    <div className="story-skill">
                      <CircularProgressbar
                        strokeWidth={1}
                        value={singleXmPercentage}
                        text={`${singleXmPercentage}%`}
                        className="progress-bar-circle"
                      />

                      <span>Wirfirm &amp; Design</span>
                    </div>
                    <div className="story-skill">
                      <CircularProgressbar
                        strokeWidth={1}
                        value={singleXmlPercentage}
                        text={`${singleXmlPercentage}%`}
                        className="progress-bar-circle"
                      />
                      <span>Developing &amp; Launch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InsideStoryArea;
