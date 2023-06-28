import React from "react";
import DateCounter from "./DateCounter";
import AnimatedCursor from "react-animated-cursor";
function CommingSoonPage() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={15}
        color="217, 10, 44"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={5}
      />
      <section className="comming-soon">
        <div className="comming-soon-left">
          <div className="cngs-content">
            <h1>Coming Soon</h1>
            <p>
              Donec bibendum enim ut elit porta ullamcorper. Vestibulum Naiquam
              nulla, venenatis eget dapibus catali topuny wekemdini iaculis
              vitae nulla.
            </p>
            <DateCounter />
            <div className="subscribe-mail">
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                method="post"
              >
                <input type="email" name="email" placeholder="Email Address" />
                <input type="submit" defaultValue="Send Now" />
              </form>
            </div>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/">
                  <i className="fab fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="comming-soon-right">
          <img
            src={process.env.PUBLIC_URL + "/images/commingsoon.jpg"}
            alt="images"
          />
        </div>
      </section>
    </>
  );
}

export default CommingSoonPage;
