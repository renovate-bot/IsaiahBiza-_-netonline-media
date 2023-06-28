import React from "react";
import { Link } from "react-router-dom";
import LetsTalkArea from "../../common/LetsTalkArea";
function ErrorPage() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="notfound-error">
        <div className="container">
          <div className="error-wrapper">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-xl-6 or2">
                <div className="error-content">
                  <h2>404 Error</h2>
                  <h1>Page not found</h1>
                  <p>
                  Oops! We apologize for the inconvenience.

404 Error: Page Not Found

It seems that the page you are looking for is missing or has been moved. Don't worry, though. We're here to help you get back on track. Here are a few things you can try:

Double-check the URL: Make sure you've entered the correct web address. Typos happen to the best of us!

Go back to the homepage: Click on our logo or use the navigation menu to return to our main page. You can explore our services, portfolio, and blog from there.

Contact our support team: If you believe this is a technical issue or you need further assistance, please don't hesitate to reach out to our friendly support team. We're always here to help you.

While you're here, why not take a moment to learn more about Netonline Media? We're a full-service digital agency specializing in creating remarkable online experiences. Our team of talented professionals is passionate about delivering top-notch solutions tailored to your specific needs.

At Netonline Media, we offer a wide range of services, including web design, development, digital marketing, branding, and more. Whether you're a small startup or an established enterprise, we have the expertise to elevate your online presence and drive measurable results.

Feel free to explore our website or connect with us on social media. We'd love to hear from you and discuss how we can assist you in achieving your digital goals.

Thank you for visiting Netonline Media, and once again, we apologize for any inconvenience caused. We're committed to providing you with the best online experience possible.

Best regards,
The Netonline Media Team
                  </p>
                  <div className="cmn-btn">
                    <Link onClick={scrollTop} to={"/"}>
                      Back to home
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-6 or1">
                <div className="error-img">
                  <img
                    src={process.env.PUBLIC_URL + "/images/error.png"}
                    alt="error images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LetsTalkArea />
    </>
  );
}

export default ErrorPage;
