import React from "react";
import { Link } from "react-router-dom";

function BlogDetailsComments() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="blog-comments">
        <h3>Comment</h3>
        <div className="single-comments">
          <div className="post-author">
            <img
              src={process.env.PUBLIC_URL + "/images/comment-author-1.png"}
              alt="blog comments images"
            />
          </div>
          <div className="post-author-details">
            <h4>Polard Girdet</h4>
            <span>11 January, 2022 At 01.56 pm</span>
            <p>
              Donec bibendum enim ut elit porta ullamcorper. Vestibulum quam
              nulla, venenatis eget iculis vitae nulla. Morbi mattis nec mi ac
              mollis. Nam et consequat tellus, a varius magiaculis, ligula vitae
              commodo blandit, augue urna accumsan sapien.
            </p>
            <div className="reply">
              <Link to={"#"} onClick={scrollTop}>
                <img
                  src={process.env.PUBLIC_URL + "/images/icons/arrow-reply.svg"}
                  alt="blog comments images"
                />{" "}
                Reply
              </Link>
            </div>
          </div>
        </div>
        <div className="single-comments">
          <div className="post-author">
            <img
              src={process.env.PUBLIC_URL + "/images/comment-author-2.png"}
              alt="blog comments images"
            />
          </div>
          <div className="post-author-details">
            <h4>Jhohan Doe</h4>
            <span>11 January, 2022 At 01.56 pm</span>
            <p>
              Donec bibendum enim ut elit porta ullamcorper. Vestibulum quam
              nulla, venenatis eget iculis vitae nulla. Morbi mattis nec mi ac
              mollis. Nam et consequat tellus, a varius magiaculis, ligula vitae
              commodo blandit, augue urna accumsan sapien.
            </p>
            <div className="reply">
              <Link to={"#"} onClick={scrollTop}>
                <img
                  src={process.env.PUBLIC_URL + "/images/icons/arrow-reply.svg"}
                  alt="blog comments images"
                />{" "}
                Reply
              </Link>
            </div>
          </div>
        </div>
        <div className="single-comments">
          <div className="post-author">
            <img
              src={process.env.PUBLIC_URL + "/images/comment-author-3.png"}
              alt="blog comments images"
            />
          </div>
          <div className="post-author-details">
            <h4>Daniel Vittori</h4>
            <span>11 January, 2022 At 01.56 pm</span>
            <p>
              Donec bibendum enim ut elit porta ullamcorper. Vestibulum quam
              nulla, venenatis eget iculis vitae nulla. Morbi mattis nec mi ac
              mollis. Nam et consequat tellus, a varius magiaculis, ligula vitae
              commodo blandit, augue urna accumsan sapien.
            </p>
            <div className="reply">
              <Link to={"#"} onClick={scrollTop}>
                <img
                  src={process.env.PUBLIC_URL + "/images/icons/arrow-reply.svg"}
                  alt="blog comments images"
                />{" "}
                Reply
              </Link>
            </div>
          </div>
        </div>
        <div className="comment-form">
          <h3>Leave A Comment</h3>
          <form onSubmit={(e) => e.preventDefault()} action="#" method="post">
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="name" placeholder="Your Name" />
              </div>
              <div className="col-md-6">
                <input type="email" name="email" placeholder="Your Email" />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  cols={30}
                  rows={10}
                  placeholder="Type Your Message"
                  defaultValue={""}
                />
                <input type="submit" defaultValue="Submit Comment" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BlogDetailsComments;
