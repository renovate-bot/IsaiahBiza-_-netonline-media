import React from "react";
// blog component
import Breadcrumb from "../../common/Breadcrumb";
import BlogCart from "./BlogCart";
import SidebarSearch from "./SidebarSearch";
import ServiceList from "./ServiceList";
import NewsPost from "./NewsPost";
import PopularTag from "./PopularTag";
import BannerWiget from "./BannerWiget";
import Pagination from "../../common/Pagination";
import LetsTalkArea from "../../common/LetsTalkArea";

function BlogPage() {
  return (
    <>
      <Breadcrumb pageName="Blog" />

      <div className="blog-news sec-mar">
        <div className="container">
          <div className="blog-wrapper">
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xl-4">
                <SidebarSearch />
                <ServiceList />
                <NewsPost />
                <PopularTag />
                <BannerWiget />
              </div>

              <div className="col-md-6 col-lg-8 col-xl-8">
                <div className="row g-4">
                  <BlogCart
                    tag="Web Design"
                    postImg={process.env.PUBLIC_URL + "/images/post/post-1.jpg"}
                    authorIMG={
                      process.env.PUBLIC_URL + "/images/author/author-1.jpg"
                    }
                  />
                  <BlogCart
                    tag="Software"
                    postImg={process.env.PUBLIC_URL + "/images/post/post-2.jpg"}
                    authorIMG={
                      process.env.PUBLIC_URL + "/images/author/author-2.jpg"
                    }
                  />
                  <BlogCart
                    tag="UI/UX Design"
                    postImg={process.env.PUBLIC_URL + "/images/post/post-3.jpg"}
                    authorIMG={
                      process.env.PUBLIC_URL + "/images/author/author-3.jpg"
                    }
                  />
                  <BlogCart
                    tag="Development"
                    postImg={process.env.PUBLIC_URL + "/images/post/post-4.jpg"}
                    authorIMG={
                      process.env.PUBLIC_URL + "/images/author/author-4.jpg"
                    }
                  />
                  <BlogCart
                    tag="3D Design"
                    postImg={process.env.PUBLIC_URL + "/images/post/post-5.jpg"}
                    authorIMG={
                      process.env.PUBLIC_URL + "/images/author/author-5.jpg"
                    }
                  />
                  <BlogCart
                    tag="Motion Graphi"
                    postImg={process.env.PUBLIC_URL + "/images/post/post-6.jpg"}
                    authorIMG={
                      process.env.PUBLIC_URL + "/images/author/author-1.jpg"
                    }
                  />
                  <BlogCart
                    tag="App Design"
                    postImg={process.env.PUBLIC_URL + "/images/post/post-7.jpg"}
                    authorIMG={
                      process.env.PUBLIC_URL + "/images/author/author-7.jpg"
                    }
                  />
                  <BlogCart
                    tag="Graphic Design"
                    postImg={process.env.PUBLIC_URL + "/images/post/post-8.jpg"}
                    authorIMG={
                      process.env.PUBLIC_URL + "/images/author/author-1.jpg"
                    }
                  />
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LetsTalkArea />
    </>
  );
}

export default BlogPage;
