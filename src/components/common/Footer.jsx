import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link onClick={scrollTop} to={"#"}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/logo.png"}
                      alt="img"
                    />
                  </Link>
                </div>
                <address>
                  <h4>Office</h4>
                  <p>Suite 7, 16 Harrow Close, Chessington, KT9 2HR</p>
                </address>
                <ul className="social-media-icons">
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/Netonlinemedia"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.twitter.com/NetonlineMedia"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>

                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.pinterest.com/"
                    >
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/company/netonline-media/"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <h4>Our Services</h4>
                <ul className="footer-menu">
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      Ecommerce Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      SEO
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      Reputation Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      {/* App Design */}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      {/* App Development */}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <h4>Netonline Media</h4>
                <ul className="footer-menu">
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/about`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service`}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/project`}
                    >
                      Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/blog`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/contact`}
                    >
                      {/* Career */}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service`}
                    >
                      {/* Pricing Plan */}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <h4>Contacts</h4>
                <div className="number">
                  <div className="num-icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="phone">
                    <a rel="noopener noreferrer" href="tel:02037293305">
                      +44 20 3729 3305
                    </a>
                    <a rel="noopener noreferrer" href="tel:02045992897">
                      +44 20 4599 2897
                    </a>
                  </div>
                </div>
                <div className="office-mail">
                  <div className="mail-icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="email">
                    <a rel="noopener noreferrer" href="mailto:info@netonlinemedia.com">
                      info@netonlinemedia.com
                    </a>
                    <a rel="noopener noreferrer" href="mailto:sales@netonlinemedia.com">
                      sales@netonlinemedia.com
                    </a>
                  </div>
                </div>
                <div className="address">
                  <div className="address-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <p>Suite 7, 16 Harrow Close, Chessington, KT9 2HR</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-12 col-md-4 col-lg-4 col-xl-5">
                <div className="copy-txt">
                  <span>
                    Copyright 2022 <b>All Rights Reserved</b> | Design By {""}
                    <a
                      rel="noopener noreferrer"
                      href="https://netonlinemedia.com/"
                      target="_blank"
                    >
                      Netonline Media
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-8 col-xl-7">
                <ul className="footer-bottom-menu">
                  <li>
                    <Link onClick={scrollTop} to={"#"}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollTop} to={"#"}>
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollTop} to={"#"}>
                      Support Policy
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollTop} to={"#"}>
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="scroll-top opacity">
        <ScrollButton></ScrollButton>
      </div>
    </>
  );
}

export default Footer;

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 800) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <i
      className="bi bi-arrow-up"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <span>top</span>
    </i>
  );
};
