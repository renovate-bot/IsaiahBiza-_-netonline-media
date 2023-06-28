import React from "react";
import { Link } from "react-router-dom";
import "swiper/css/autoplay";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
// install Swiper modules
function HeroArea() {
  const HeroSlider = {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    loop: "true",
    clickable: true,
    autoplay: true,
    effect: "fade",
    centeredSlides: true,
    roundLengths: true,
    fadeEffect: {
      crossFade: true,
    },
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="hero-area">
        <div className="swiper hero-slider">
          <Swiper
            pagination={{
              type: "bullets",
              clickable: true,
            }}
            {...HeroSlider}
            loop={true}
            className="swiper-wrapper"
          >
            <SwiperSlide className="swiper-slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="hero-content-wrapper">
                      <div className="hero-content-wrap">
                        <div className="hero-content-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/hero-slider-1.jpg"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="hero-content">
                          <h2>Reviews</h2>
                          <h1>
                            ONLINE REPUTATION <span>MANAGEMENT.</span>
                          </h1>
                          <p>
                          Building fortresses of trust in the digital realm is key in every business. We will help you to unlock your reputation's potential with our online reputation management Services!
                          </p>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/about`}
                            className="about-btn"
                          >
                            About us
                          </Link>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/project-details`}
                            className="work-btn"
                          >
                            How we work
                          </Link>
                          <div className="slider-num">
                            <span>01</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="hero-content-wrapper">
                      <div className="hero-content-wrap">
                        <div className="hero-content-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/hero-slider-2.png"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="hero-content">
                          <h2>Visibility</h2>
                          <h1>
                            SEARCH ENGINE <span>OPTIMISATION.</span>
                          </h1>
                          <p>
                          Supercharge your website's success with our expert SEO services. A good SEO strategy will elevate rankings, boost traffic and allow you to dominate the digital landscape!
                          </p>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/about`}
                            className="about-btn"
                          >
                            About us
                          </Link>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/project-details`}
                            className="work-btn"
                          >
                            How we work
                          </Link>
                          <div className="slider-num">
                            <span>02</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="hero-content-wrapper">
                      <div className="hero-content-wrap">
                        <div className="hero-content-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/hero-slider-3.png"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="hero-content">
                          <h2>E-Shop</h2>
                          <h1>
                            ECOMMERCE WEB <span>DEVELOPMENT.</span>
                          </h1>
                          <p>
                          We transform Ideas into Digital Reality! From code to commerce, crafting seamless online experiences, building bridges to success and empowering businesses with web and ecommerce solutions.
                          </p>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/about`}
                            className="about-btn"
                          >
                            About us
                          </Link>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/project-details`}
                            className="work-btn"
                          >
                            How we work
                          </Link>
                          <div className="slider-num">
                            <span>03</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination" />
        </div>
        <div className="social-media">
          <ul className="social-list">
            <li>
              <a rel="noopener noreferrer" href="https://www.facebook.com/Netonlinemedia">
                Facebook
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://www.instagram.com/">
                instagram
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://www.linkedin.com/company/netonline-media/">
                Linked in
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default HeroArea;
