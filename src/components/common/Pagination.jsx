import React from "react";
import { Link } from "react-router-dom";

function Pagination() {
  return (
    <>
      <nav>
        <ul className="pagination">
          <li>
            <Link to={"/"}>
              <i className="bi bi-arrow-left-short"></i>
            </Link>
          </li>
          <li className="active">
            <Link to={"/"}>01</Link>
          </li>
          <li>
            <Link to={"/"}>02</Link>
          </li>
          <li>
            <Link to={"/"}>03</Link>
          </li>
          <li>
            <Link to={"/"}>
              <i className="bi bi-arrow-right-short"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
