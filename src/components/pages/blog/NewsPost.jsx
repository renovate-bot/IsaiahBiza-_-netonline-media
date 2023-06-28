import React from "react";
import { Link } from "react-router-dom";

function NewsPost() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="sidebar-widget">
        <h4>Newest Post</h4>
        <div className="widget-cnt">
          <div className="wi">
            <Link
              to={`${process.env.PUBLIC_URL}blog-details`}
              onClick={scrollTop}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/post/widget-post-1.jpg"}
                alt="newest post images"
              />
            </Link>
          </div>
          <div className="wc">
            <h6>
              <Link
                to={`${process.env.PUBLIC_URL}blog-details`}
                onClick={scrollTop}
              >
                Etiam vel diam volutpa pellentesque.
              </Link>
            </h6>
            <span className="post-date">05 January, 2022</span>
          </div>
        </div>
        <div className="widget-cnt">
          <div className="wi">
            <Link
              to={`${process.env.PUBLIC_URL}blog-details`}
              onClick={scrollTop}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/post/widget-post-2.jpg"}
                alt="newest post images"
              />
            </Link>
          </div>
          <div className="wc">
            <h6>
              <Link
                to={`${process.env.PUBLIC_URL}blog-details`}
                onClick={scrollTop}
              >
                malesuada sapien and Donec sed.
              </Link>
            </h6>
            <span className="post-date">05 January, 2022</span>
          </div>
        </div>
        <div className="widget-cnt">
          <div className="wi">
            <Link
              to={`${process.env.PUBLIC_URL}blog-details`}
              onClick={scrollTop}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/post/widget-post-3.jpg"}
                alt="newest post images"
              />
            </Link>
          </div>
          <div className="wc">
            <h6>
              <Link
                to={`${process.env.PUBLIC_URL}blog-details`}
                onClick={scrollTop}
              >
                Fusce ornare dapibus ultricies.
              </Link>
            </h6>
            <span className="post-date">05 January, 2022</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsPost;
