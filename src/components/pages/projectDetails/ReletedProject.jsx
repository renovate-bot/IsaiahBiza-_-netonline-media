import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { SRLWrapper } from "simple-react-lightbox";

SwiperCore.use([Navigation]);

function ReletedProject() {
  const portfolioRelatedSlide = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  };
  return (
    <>
      <div className="releted-project">
        <h3>Related Project</h3>
        <SRLWrapper>
          <div className="swiper releted-project-slider">
            <Swiper {...portfolioRelatedSlide} className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <Link to={"/"}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-1.jpg"
                        }
                        alt="images"
                      />
                    </Link>
                  </div>
                  <div className="portfolio-inner">
                    <span>Template</span>
                    <h4>Creative Agency</h4>
                    <div className="portfolio-hover">
                      <Link
                        to={`${process.env.PUBLIC_URL}/project-details`}
                        className="case-btn"
                      >
                        Case Study
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-1.jpg"
                        }
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/portfolio/search-2.svg"
                          }
                          alt="images"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <Link to={"/"}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-2.jpg"
                        }
                        alt="images"
                      />
                    </Link>
                  </div>
                  <div className="portfolio-inner">
                    <span>UI Kit</span>
                    <h4>E-Shop Ecommerce</h4>
                    <div className="portfolio-hover">
                      <Link
                        to={`${process.env.PUBLIC_URL}/project-details`}
                        className="case-btn"
                      >
                        Case Study
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-2.jpg"
                        }
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/portfolio/search-2.svg"
                          }
                          alt="images"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <Link to={"/"}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-3.jpg"
                        }
                        alt="images"
                      />
                    </Link>
                  </div>
                  <div className="portfolio-inner">
                    <span>Graphic</span>
                    <h4>Art Deco Cocktails</h4>
                    <div className="portfolio-hover">
                      <Link
                        to={`${process.env.PUBLIC_URL}/project-details`}
                        className="case-btn"
                      >
                        Case Study
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-3.jpg"
                        }
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/portfolio/search-2.svg"
                          }
                          alt="images"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
        </SRLWrapper>
      </div>
    </>
  );
}

export default ReletedProject;
