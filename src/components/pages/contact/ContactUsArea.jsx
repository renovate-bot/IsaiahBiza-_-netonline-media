import React from "react";

function ContactUsArea() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-xl-6">
            <div className="title black">
              <span>Get In Touch</span>
              <h2>Please contact us if you have more questions.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="office-info">
              <div className="icon">
                <i className="bi bi-geo-alt" />
              </div>
              <h4>Location</h4>
              <p>
                Suite 7, 16 Harrow Close, Chessington, Surrey, KT9 2HR, UK
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="office-info">
              <div className="icon">
                <i className="bi bi-telephone" />
              </div>
              <h4>Phone</h4>
              <a href="tel:0442037293305">+44 20 3729 3305</a>
              <a href="tel:0442045992897">+44 20 4599 2897</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="office-info">
              <div className="icon">
                <i className="bi bi-envelope" />
              </div>
              <h4>Email</h4>
              <a href="mailto:info@netonlinemedia.com">info@netonlinemedia.com</a>
              <a href="mailto:support@example.com">sales@netonlinemedia.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsArea;
