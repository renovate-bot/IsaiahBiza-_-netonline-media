import React from "react";
import { Link } from "react-router-dom";
function Breadcrumb() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrapper">
                <h1>About us</h1>
                <span>
                  <Link to={"/"}>Home</Link>
                  <i>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/breadcrumb-arrow.svg"
                      }
                      alt="images"
                    />
                  </i>
                  About us
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Breadcrumb;
