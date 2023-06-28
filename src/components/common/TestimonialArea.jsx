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
function TestimonialArea() {
  const testimonialSlider = {
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
      <section className="testimonial-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="swiper testimonial-slider">
                <Swiper
                  pagination={{
                    type: "fraction",
                  }}
                  {...testimonialSlider}
                  className="swiper-wrapper"
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-content">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="client-info">
                        <div className="client-pic">
                          <img
                            src={process.env.PUBLIC_URL + "/images/client.jpg"}
                            alt="images"
                          />
                        </div>
                        <div className="client-details">
                          <h4>Savannah Thompson</h4>
                          <span>CEO & Founder (Kumba Group)</span>
                        </div>
                      </div>
                      <p>
                        <i className="fas fa-quote-left" /> We couldn't be happier with the website developed by Netonline Media. Their web development team seamlessly transformed our vision into a stunning, user-friendly website that perfectly represents our brand. Not only did they deliver exceptional design and functionality, but their attention to detail and prompt communication made the entire process a breeze. Netonline Media is our go-to agency for all our web development needs.{" "}
                        <i className="fas fa-quote-right" />
                      </p>
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-content">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="client-info">
                        <div className="client-pic">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/images/client-2.jpg"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="client-details">
                          <h4>Richard Stoke </h4>
                          <span>Compliance Director (Access Forex)</span>
                        </div>
                      </div>
                      <p>
                        <i className="fas fa-quote-left" /> Netonline Media has been a game-changer for our business! Their expertise in SEO has significantly boosted our online visibility, leading to a substantial increase in organic traffic and conversions. The team's dedication, professionalism, and proactive approach have exceeded our expectations. We highly recommend Netonline Media for anyone looking to achieve outstanding results in the digital realm.{" "}
                        <i className="fas fa-quote-right" />
                      </p>
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-content">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="client-info">
                        <div className="client-pic">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/images/client-3.jpg"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="client-details">
                          <h4>Ed Bracey</h4>
                          <span>CEO & Founder (ATOZ Procurement)</span>
                        </div>
                      </div>
                      <p>
                        <i className="fas fa-quote-left" /> Netonline Media has been instrumental in managing our online reputation. With their expert guidance and strategic approach, we have successfully built a positive brand image and effectively addressed any reputation challenges that arose. Their proactive reputation management strategies and prompt response to customer feedback have helped us build trust and credibility in the digital space. We are extremely satisfied with the results and highly recommend Netonline Media for online reputation management.{" "}
                        <i className="fas fa-quote-right" />
                      </p>
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialArea;
