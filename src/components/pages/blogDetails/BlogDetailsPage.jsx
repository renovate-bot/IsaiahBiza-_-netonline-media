import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import BannerWiget from "../blog/BannerWiget";
import NewsPost from "../blog/NewsPost";
import PopularTag from "../blog/PopularTag";
import ServiceList from "../blog/ServiceList";
import SidebarSearch from "../blog/SidebarSearch";
import BlogDetailsComments from "./BlogDetailsComments";
import BlogDetailsWrapper from "./BlogDetailsWrapper";

function BlogDetailsPage() {
  return (
    <>
      <Breadcrumb pageName="Blog Details" />
      <div className="blog-news sec-mar">
        <div className="container">
          <div className="blog-wrapper">
            <div className="row">
              <div className="col-12 col-lg-8 col-xl-8 or2">
                <BlogDetailsWrapper />
                <BlogDetailsComments />
              </div>
              <div className="col-12 col-lg-4 col-xl-4 or1">
                <SidebarSearch />
                <ServiceList />
                <NewsPost />
                <PopularTag />
                <BannerWiget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetailsPage;
