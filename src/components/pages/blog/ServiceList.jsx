import React from "react";
import { Link } from "react-router-dom";

function ServiceList() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="sidebar-widget">
        <h4>Services</h4>
        <ul className="service-list">
          <li>
            <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>
              <i>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/icons/dash-circle-icon.svg"
                  }
                  alt="images"
                />
              </i>
              Web Design <span>(15)</span>
            </Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>
              <i>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/icons/dash-circle-icon.svg"
                  }
                  alt="images"
                />
              </i>
              Apps Development <span>(18)</span>
            </Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>
              <i>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/icons/dash-circle-icon.svg"
                  }
                  alt="images"
                />
              </i>
              Software Development <span>(21)</span>
            </Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>
              <i>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/icons/dash-circle-icon.svg"
                  }
                  alt="images"
                />
              </i>
              Motion Graphics <span>(25)</span>
            </Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>
              <i>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/icons/dash-circle-icon.svg"
                  }
                  alt="images"
                />
              </i>
              UI/UX Design <span>(29)</span>
            </Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>
              <i>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/icons/dash-circle-icon.svg"
                  }
                  alt="images"
                />
              </i>
              Graphic Design <span>(31)</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ServiceList;
