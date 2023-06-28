import React from "react";
import { Link } from "react-router-dom";

function LatesNewsArea() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="latest-news sec-mar">
        <div className="container">
          <div className="row gx-4">
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="signle-news">
                <div className="tag">
                  <Link onClick={scrollTop} to={"/"}>Web Design</Link>
                </div>
                <div className="post-img">
                  <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/blog-details`}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/post/post-1.jpg"}
                      alt="images"
                    />
                  </Link>
                </div>
                <div className="news-content">
                  <div className="author">
                    <div className="author-pic">
                      <img
                        src={
                          process.env.PUBLIC_URL + "images/author/author-1.jpg"
                        }
                        alt="images"
                      />
                    </div>
                    <div className="author-info">
                      <h5>Posted by, Alen Jodge</h5>
                      <span>05 January, 2021</span>
                    </div>
                  </div>
                  <h3>
                    <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/blog-details`}>
                      Donec a porttitor phari sod tellus Nunc quis erosn.
                    </Link>
                  </h3>
                  <p>
                    Aptent taciti sociosqu ad litora torquent pi himenaeos.
                    Praesent nec neque at dolor ti venenatis consectetur eu quis
                    ex.
                  </p>
                  <div className="view-btn">
                    <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/blog-details`}>
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="signle-news">
                <div className="tag">
                  <Link onClick={scrollTop} to={"/"}>Software</Link>
                </div>
                <div className="post-img">
                  <Link to={`${process.env.PUBLIC_URL}/blog_details`}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/post/post-2.jpg"}
                      alt="images"
                    />
                  </Link>
                </div>
                <div className="news-content">
                  <div className="author">
                    <div className="author-pic">
                      <img
                        src={
                          process.env.PUBLIC_URL + "images/author/author-2.jpg"
                        }
                        alt="images"
                      />
                    </div>
                    <div className="author-info">
                      <h5>Posted by, Alen Jodge</h5>
                      <span>05 January, 2021</span>
                    </div>
                  </div>
                  <h3>
                    <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/blog-details`}>
                      Mekusa a porttitor phari sod tellus algo quis ksro.
                    </Link>
                  </h3>
                  <p>
                    Aptent taciti sociosqu ad litora torquent pi himenaeos.
                    Praesent nec neque at dolor ti venenatis consectetur eu quis
                    ex.
                  </p>
                  <div className="view-btn">
                    <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/blog-details`}>
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="title black">
                <span>Blog</span>
                <h2>Stay Informed: Explore Our Latest Digital Insights and Articles</h2>
                <div className="cmn-btn">
                  <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/blog`}>
                    View All Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatesNewsArea;
