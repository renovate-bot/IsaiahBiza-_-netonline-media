import React from "react";
import { Link } from "react-router-dom";

function PopularTag() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="sidebar-widget">
        <h4>Popular tag</h4>
        <ul className="tag-list">
          <li>
            <Link to={"/"} onClick={scrollTop}>
              Website
            </Link>
          </li>
          <li>
            <Link to={"/"} onClick={scrollTop}>
              Web Design
            </Link>
          </li>
          <li>
            <Link to={""} onClick={scrollTop}>
              Development
            </Link>
          </li>
          <li>
            <Link to={"/"} onClick={scrollTop}>
              Graphic Design
            </Link>
          </li>
          <li>
            <Link to={"/"} onClick={scrollTop}>
              Graphic
            </Link>
          </li>
          <li>
            <Link to={"/"} onClick={scrollTop}>
              UI/UX Design
            </Link>
          </li>
          <li>
            <Link to={"/"} onClick={scrollTop}>
              Activities
            </Link>
          </li>
          <li>
            <Link to={"/"} onClick={scrollTop}>
              Software Design
            </Link>
          </li>
          <li>
            <Link to={"/"} onClick={scrollTop}>
              3d Design
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PopularTag;
