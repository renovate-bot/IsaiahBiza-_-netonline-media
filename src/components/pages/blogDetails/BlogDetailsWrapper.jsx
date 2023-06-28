import React from "react";
import { Link } from "react-router-dom";

function BlogDetailsWrapper() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="blog-details">
        <div className="post-thumbnail">
          <img
            src={process.env.PUBLIC_URL + "/images/post/blog-list-3.jpg"}
            alt="blog images"
          />
        </div>
        <h3>
          Nullam lacinia magna vitae mi tincidunt tudou owner Dolebon li
          faucibus Aenean nec eros sagittis.
        </h3>
        <div className="author-comments">
          <div className="author">
            <div className="author-pic">
              <img
                src={process.env.PUBLIC_URL + "/images/author/author-1.jpg"}
                alt="blog images"
              />
            </div>
            <div className="author-info">
              <h5>Posted by, Alen Jodge</h5>
              <span>05 January, 2021</span>
            </div>
          </div>
          <div className="comments">
            <span>
              <i className="bi bi-chat-dots" /> Comments (01)
            </span>
          </div>
        </div>
        <p>
          Donec bibendum enim ut elit porta ullamcorper. Vestibulum quam nulla,
          venenatis eget dapibus ac iaculis vitae nulla. Morbi mattis nec mi ac
          mollis. Nam et consequat tellus, a varius magna. Curabitu iaculis,
          ligula vitae commodo blandit, augue urna accumsan sapien, at accumsan
          metus dolor eu ju Vivamus pharetra ullamcorper efficitur. Vestibulum
          at ex in massa consequat faucibus. Nullam and gravida ex nisl, semper
          lacinia urna mattis vel. Nullam pharetra aliquam sapien. Duis aliquet
          varius commodo.Quisque ut dui pulvinar, sagittis mi vitae, posuere
          justo. Ut ac metus porta orci posuere tegestas. Donec suscipit dapibus
          purus at pretium. Morbi ullamcorper vulputate nibh eu tempus.
          Fuvestibulum hendrerit dapibus. Nam lobortis urna vel augue
          pellentesque lobortis. Cras non pharetrturpis. In tincidunt lacus et
          fringilla malesuada. Aenean molestie, enim vel elementum sodales,
          elitmagna condimentum lorem, nec pretium nunc felis sed nulla. In
          efficitur dignissim velit, sed varius dapibus quis. Maecenas finibus
          purus sit amet sem consequat faucibus.
        </p>
        <h4>Curabitur semper quam sit amet lacus venenatis, iaculis.</h4>
        <p>
          Donec bibendum enim ut elit porta ullamcorper. Vestibulum quam nulla,
          venenatis eget dapibus ac iaculis vitae nulla. Morbi mattis nec mi ac
          mollis. Nam et consequat tellus, a varius magna. Curabituiaculis,
          ligula vitae commodo blandit, augue urna accumsan sapien, at accumsan
          metus dolor eu juVivamus pharetra ullamcorper efficitur. Vestibulum at
          ex in massa consequat faucibus.
        </p>
        <div className="blog-quate">
          <blockquote>
            <div className="quote-left">
              <i className="bi bi-quote" />
            </div>
            <p>
              Donec bibendum enim ut elit porta ullamcorper. met eitye gueni
              iaculis vitae nulla. Morbi mattis nec mi ac mollis. Nam etjinanan
              consequat tellus, a varius magna. Vestibulum and <br />
              <b>Ambrela Jwe</b>
            </p>
            <div className="quote-right">
              <i className="bi bi-quote" />
            </div>
          </blockquote>
        </div>
        <p>
          Donec bibendum enim ut elit porta ullamcorper. Vestibulum quam nulla,
          venenatis eget dapibus ac iaculis vitae nulla. Morbi mattis nec mi ac
          mollis. Nam et consequat tellus, a varius magna. Curabitu iaculis,
          ligula vitae commodo blandit, augue urna accumsan sapien, at accumsan
          metus dolor eu ju Vivamus pharetra ullamcorper efficitur. Vestibulum
          at ex in massa consequat faucibus.
        </p>
        <div className="blog-banner">
          <div className="row">
            <div className="col-xl-6">
              <div className="blog-banner-img">
                <img
                  src={process.env.PUBLIC_URL + "/images/blog-banner.png"}
                  alt="blog images"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="blog-banner-content">
                <p>
                  Donec bibendum enim ut elit porta ullamcorper Vestibulum quam
                  nulla, venenatis eget dapibus iaculis vitae nulla. Morbi
                  mattis nec mi ac mollis Nam et consequat tellus, a varius
                  magna. toma iaculis, ligula vitae commodo blandit, augue
                  aburna accumsan sapien, at accumsan metus dolVivamus pharetra
                  ullamcorper efficitur. aciyono Vestibulum quam nulla,
                  venenatis eget dapibus iaculis vitae nulla. Morbi mattis nec
                  mi ac tisanVestibulum at ex in massa consequat faucibus.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-8">
              <div className="tags">
                <Link onClick={scrollTop} to={"#"}>
                  Website
                </Link>
                <Link onClick={scrollTop} to={"#"}>
                  Software Design
                </Link>
                <Link onClick={scrollTop} to={"#"}>
                  UI/UX Design
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="share-now">
                <span>share now</span>
                <ul className="social-share">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetailsWrapper;
