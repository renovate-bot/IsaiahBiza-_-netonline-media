import React from "react";
import { Link } from "react-router-dom";

function BannerWiget() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="widget-banner">
        <img src={process.env.PUBLIC_URL + '/images/widget-banner.jpg'} alt="bannerWiget" />
        <div className="banner-content">
          <div className="banner-inner">
            <h2>About Your Next Project.</h2>
            <div className="cmn-btn">
              <Link
                onClick={scrollTop}
                to={`${process.env.PUBLIC_URL}/contact`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerWiget;
