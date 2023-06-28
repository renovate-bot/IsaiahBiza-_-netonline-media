import React from "react";
import { Link } from "react-router-dom";

function StandardNewsList() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="row gy-5">
        <div className="col-12">
          <div className="signle-news-list">
            <div className="post-img">
              <Link
                to={`${process.env.PUBLIC_URL}/blog-details`}
                onClick={scrollTop}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/post/blog-list-3.jpg"}
                  alt="images"
                />
              </Link>
            </div>
            <div className="news-content">
              <div className="post-author-details">
                <div className="author">
                  <div className="author-pic">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/author/author-1.jpg"
                      }
                      alt="images"
                    />
                  </div>
                  <div className="author-info">
                    <h5>Posted by, Alen Jodge</h5>
                    <span>05 January, 2022</span>
                  </div>
                </div>
              </div>
              <div className="comment">
                <Link to={"#"}>
                  <span>
                    <i className="bi bi-chat-dots" />
                    comments (01)
                  </span>
                </Link>
              </div>
              <h3>
                <Link
                  to={`${process.env.PUBLIC_URL}/blog-details`}
                  onClick={scrollTop}
                >
                  Morbi quis mi sed sem ullamcorper rutrum eget eget laci
                  antenica Vitaen Praesent eget mi eget mauris.
                </Link>
              </h3>
              <div className="view-btn">
                <Link
                  to={`${process.env.PUBLIC_URL}/blog-details`}
                  onClick={scrollTop}
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="signle-news-list">
            <div className="post-img">
              <Link
                to={`${process.env.PUBLIC_URL}/blog-details`}
                onClick={scrollTop}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/post/blog-list-1.jpg"}
                  alt="images"
                />
              </Link>
            </div>
            <div className="news-content">
              <div className="post-author-details">
                <div className="author">
                  <div className="author-pic">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/author/author-2.jpg"
                      }
                      alt="images"
                    />
                  </div>
                  <div className="author-info">
                    <h5>Posted by, Zeksa Nos</h5>
                    <span>07 January, 2022</span>
                  </div>
                </div>
              </div>
              <div className="comment">
                <Link to={"#"}>
                  <span>
                    <i className="bi bi-chat-dots" />
                    comments (01)
                  </span>
                </Link>
              </div>
              <h3>
                <Link
                  to={`${process.env.PUBLIC_URL}/blog-details`}
                  onClick={scrollTop}
                >
                  Suspendisse quis scelerisque elit. Aliquam erat volutpata
                  Quisque suscipit vel felis quis pharetra.
                </Link>
              </h3>
              <div className="view-btn">
                <Link
                  to={`${process.env.PUBLIC_URL}/blog-details`}
                  onClick={scrollTop}
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="signle-news-list">
            <div className="post-img">
              <Link
                to={`${process.env.PUBLIC_URL}/blog-details`}
                onClick={scrollTop}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/post/blog-list-2.jpg"}
                  alt="images"
                />
              </Link>
            </div>
            <div className="news-content">
              <div className="post-author-details">
                <div className="author">
                  <div className="author-pic">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/author/author-3.jpg"
                      }
                      alt="images"
                    />
                  </div>
                  <div className="author-info">
                    <h5>Posted by, Kemsi Log</h5>
                    <span>05 January, 2022</span>
                  </div>
                </div>
              </div>
              <div className="comment">
                <Link to={"#"}>
                  <span>
                    <i className="bi bi-chat-dots" />
                    comments (01)
                  </span>
                </Link>
              </div>
              <h3>
                <Link
                  to={`${process.env.PUBLIC_URL}/blog-details`}
                  onClick={scrollTop}
                >
                  Nunc ipsum nunc, varius non est in, sollicitudin facilisisai
                  velit. Ut nec urna in eros rutrum varius
                </Link>
              </h3>
              <div className="view-btn">
                <Link
                  to={`${process.env.PUBLIC_URL}/blog-details`}
                  onClick={scrollTop}
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StandardNewsList;
