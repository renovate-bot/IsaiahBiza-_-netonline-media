import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

function HowWeWorkArea() {
  const WorkProgressSlide = {
    slidesPerView: 1,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <>
      <section className="how-we-work sec-mar-top">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xl-4">
              <div className="title black">
                <span>How We Work</span>
                <h2>Our Unique Work Process.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="swiper work-process">
                <Swiper {...WorkProgressSlide} className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="work-process-wrapper">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/work-process-slider-1.png"
                        }
                        alt="images"
                      />
                      <div className="work-process-inner">
                        <b>01</b>
                        <h4>Brainstorm &amp; Wirefirm</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="work-process-wrapper">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/work-process-slider-2.jpg"
                        }
                        alt="images"
                      />
                      <div className="work-process-inner">
                        <b>02</b>
                        <h4>Brainstorm &amp; Wirefirm</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowWeWorkArea;
