/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function ContactForm() {
  return (
    <>
      <div className="contact-information">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="contact-form">
                <h3>Have Any Questions</h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  method="post"
                >
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="col-xl-6">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        cols={30}
                        rows={10}
                        placeholder="Your message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12">
                      <input type="submit" defaultValue="Send Message" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19931.81161529211!2d-0.3311888652343757!3d51.35753720000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760a6e05f4428f%3A0x82d1d949f63d70d3!2sNetonline%20Media!5e0!3m2!1sen!2suk!4v1684963135297!5m2!1sen!2suk" width="300" height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
