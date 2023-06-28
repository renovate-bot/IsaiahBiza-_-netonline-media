import React from "react";
function OurPartnerArea() {
  return (
    <>
      <section className="our-partner">
        <div className="container-fluid g-0 overflow-hidden">
          <div className="row align-items-center g-0">
            <div className="col-12 col-xl-6">
              <div className="newsletter">
                <div className="subscribes">
                  <span>Get In Touch</span>
                  <h1>Subscribe To Our</h1>
                  <h2>Newsletter</h2>
                  <div className="subscribe-form">
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      action="#"
                      method="post"
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Type Your Email"
                      />
                      <input type="submit" defaultValue="Connect" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className="our-clients">
                <div className="row align-items-center">
                  <div className="col-md-6 col-lg-4 col-xl-6">
                    <div className="title">
                      <span>Trusted Partner Across The Globe</span>
                      <h2>Partner With Us.</h2>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-1.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>https://www.wandle.com/</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-2.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>https://www.accessforex.com/</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-3.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>https://tirhealthcare.co.uk/</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-4.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>https://atozprocurementservices.com/</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-5.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>https://www.atlanticsolicitors.com/</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-6.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>https://www.yobatv.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-7.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>https://www.pahousing.co.uk/</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-8.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>https://cayepepe.co.uk/</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-9.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>https://www.bloc-architects.com/</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-10.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>https://early-n.com/</span>
                      </div>
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

export default OurPartnerArea;
