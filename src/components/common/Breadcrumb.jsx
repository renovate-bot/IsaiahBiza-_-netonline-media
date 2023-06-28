import React from "react";
import { Link } from "react-router-dom";
function Breadcrumb(props) {
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrapper">
                <h1>{props.pageName}</h1>
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
                  {props.pageName}
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
