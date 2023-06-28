import React from "react";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
SwiperCore.use([Navigation, Autoplay]);

function PortfolioArea(props) {
  const portfolioSlider = {
    slidesPerView: 5,
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
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      // when window width is >= 1400px
      1400: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
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
      <SRLWrapper>
        <div className="portfolio-area sec-mar-top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-7 col-xl-5">
                <div className={`title ${props.black}`}>
                  <span>Case Study</span>

                  <h2>Transformative Solutions In Action.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper portfolio-slider">
            <Swiper
              {...portfolioSlider}
              pagination={{
                type: "bullets",
                clickable: true,
                // el:".swiper-pagination"
              }}
              className="swiper-wrapper"
            >
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="/">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-1.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>BLOC ARCHITECTS</span>
                    <h4>Local SEO</h4>

                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
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
                        <i
                          alt="images"
                          src={
                            process.env.PUBLIC_URL +
                            "/images/portfolio/search-2.svg"
                          }
                          className="fas fa-search"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="#s">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-2.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>ROSEMEAD GUEST HOUSE</span>
                    <h4>Local SEO</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
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
                          alt="images"
                          src={
                            process.env.PUBLIC_URL +
                            "/images/portfolio/search-2.svg"
                          }
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="#s">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-3.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>ATLANTIC SOLICITORS</span>
                    <h4>Local SEO</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
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
                          alt="images"
                          src={
                            process.env.PUBLIC_URL +
                            "/images/portfolio/search-2.svg"
                          }
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="#s">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-4.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>ATOZ PROCUREMENT </span>
                    <h4>Web Development</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/project-details`}
                        className="case-btn"
                      >
                        Case Study
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-4.jpg"
                        }
                      >
                        <img
                          alt="images"
                          src={
                            process.env.PUBLIC_URL +
                            "/images/portfolio/search-2.svg"
                          }
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="#s">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-5.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>CAYE PEPE</span>
                    <h4>Ecommerce Website</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/project-details`}
                        className="case-btn"
                      >
                        Case Study
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-5.jpg"
                        }
                      >
                        <img
                          alt="images"
                          src={
                            process.env.PUBLIC_URL +
                            "/images/portfolio/search-2.svg"
                          }
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="#s">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-3.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>ATLANTIC SOLICITORS</span>
                    <h4>Local SEO</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
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
                        <i className="fas fa-search" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination" />
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}

export default PortfolioArea;
