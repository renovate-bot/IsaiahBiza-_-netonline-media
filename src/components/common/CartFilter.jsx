import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../data/Data";
import { SRLWrapper } from "simple-react-lightbox";

function CartFilter({ active, props }) {
  const [items, setItems] = useState(Data);
  const filterItem = (catagoryItem) => {
    const updateItems = Data.filter((curentElemet) => {
      return curentElemet.category === catagoryItem;
    });
    setItems(updateItems);
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="project-tab">
            <ul className="project-filter-tab">
              <li
                className={`${active ? "" : "active"}`}
                onClick={() => setItems(Data)}
              >
                All
              </li>
              <li onClick={() => filterItem("UI/UX")}>UI/UX</li>
              <li onClick={() => filterItem("Web Design")}>Web Design</li>
              <li onClick={() => filterItem("Developing")}>Developing</li>
              <li onClick={() => filterItem("Graphic Design")}>
                Graphic Design
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row g-4 project-items-wrapper">
        {items.map((element) => {
          const { title, image, heading } = element;

          return (
            <div
              key={element.id}
              className="col-md-6 col-lg-4 col-xl-4 project-single-item uiux"
            >
              <div className="single-portfolio">
                <SRLWrapper>
                  <div className="portfolio-data">
                    <a href={heading}>
                      <img src={image} alt="images" />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>{title}</span>
                    <h4>{heading}</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/project-details`}
                        className="case-btn"
                      >
                        Case Study
                      </Link>

                      <a data-lightbox="image1" href={heading}>
                        <div className="isotop"></div>
                      </a>

                      <a data-lightbox="image1" href={image}>
                        <img
                          alt="images"
                          src={
                            process.env.PUBLIC_URL +
                            "/images/portfolio/search-2.svg"
                          }
                        />
                      </a>
                    </div>
                  </div>
                </SRLWrapper>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CartFilter;
