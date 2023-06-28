import React from "react";
import { Link } from "react-router-dom";

function BlogCart(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="col-12 col-lg-6 col-xl-6">
        <div className="signle-news">
          <div className="tag">
            <Link onClick={scrollTop} to={"/"}>
              {props.tag}
            </Link>
          </div>
          <div className="post-img">
            <Link
              onClick={scrollTop}
              to={`${process.env.PUBLIC_URL}/blog-details`}
            >
              <img src={props.postImg} alt="blog images" />
            </Link>
          </div>
          <div className="news-content">
            <div className="author">
              <div className="author-pic">
                <img src={props.authorIMG} alt="blog images" />
              </div>
              <div className="author-info">
                <h5>Posted by, Alen Jodge</h5>
                <span>05 January, 2022</span>
              </div>
            </div>
            <h3>
              <Link
                onClick={scrollTop}
                to={`${process.env.PUBLIC_URL}/blog-details`}
              >
                Donec a porttitor phari sod tellus Nunc quis erosn.
              </Link>
            </h3>
            <p>
              Aptent taciti sociosqu ad litora torquent pi himenaeos. Praesent
              nec neque at dolor ti venenatis consectetur eu quis ex.
            </p>
            <div className="view-btn">
              <Link
                onClick={scrollTop}
                to={`${process.env.PUBLIC_URL}/blog-details`}
              >
                View details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCart;
