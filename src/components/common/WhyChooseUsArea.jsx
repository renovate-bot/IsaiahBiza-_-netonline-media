import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import ProgressBar from "@ramonak/react-progress-bar";

function WhyChooseUsArea(props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="why-choose-us sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className={`title ${props.black}`}>
                <span>Why Choose Netonline Media</span>
                <h2 className="mb-15">
                  Ignite Online Visibilty and Drive Organic Growth
                </h2>
              </div>
              <div className="video-demo">
                <img
                  src={process.env.PUBLIC_URL + "/images/play-video.jpg"}
                  alt="images"
                />
                <div className="play-btn">
                  <div onClick={() => setOpen(true)} className="popup-video">
                    <i className="fas fa-play" /> Play now
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className={`valuable-skills ${props.light}`}>
                <img
                  src={process.env.PUBLIC_URL + "/images/valuable-skill.jpg"}
                  alt="images"
                />
                <div className="signle-bar pt-0">
                  <h6>Web Development</h6>
                  <ProgressBar
                    bgColor="#D90A2C"
                    baseBgColor="#d90a2c80"
                    height="5px"
                    completed={93}
                    labelAlignment="outside"
                    labelColor="#000"
                    animateOnRender={true}
                    labelClassName={`${props.lable}`}
                  />
                </div>
                <div className="signle-bar">
                  <h6>Ecommerce Web Development</h6>
                  <ProgressBar
                    bgColor="#D90A2C"
                    baseBgColor="#d90a2c80"
                    height="5px"
                    completed={94}
                    labelAlignment="outside"
                    labelColor="#000"
                    animateOnRender={true}
                    labelClassName={`${props.lable}`}
                  />
                </div>
                <div className="signle-bar">
                  <h6>Search Engine Optimisation</h6>
                  <ProgressBar
                    bgColor="#D90A2C"
                    baseBgColor="#d90a2c80"
                    height="5px"
                    completed={97}
                    labelAlignment="outside"
                    labelColor="#000"
                    animateOnRender={true}
                    labelClassName={`${props.lable}`}
                  />
                </div>
                <div className="signle-bar">
                  <h6>Online Reputation Mnagement</h6>
                  <ProgressBar
                    // className="barsss"
                    bgColor="#D90A2C"
                    baseBgColor="#d90a2c80"
                    height="5px"
                    completed={95}
                    labelClassName={`${props.lable}`}
                    labelAlignment="outside"
                    labelColor="#000"
                    animateOnRender={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
}

export default WhyChooseUsArea;
