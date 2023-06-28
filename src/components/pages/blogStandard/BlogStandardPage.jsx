import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Pagination from "../../common/Pagination";
import BannerWiget from "../blog/BannerWiget";
import NewsPost from "../blog/NewsPost";
import PopularTag from "../blog/PopularTag";
import ServiceList from "../blog/ServiceList";
import SidebarSearch from "../blog/SidebarSearch";
import StandardNewsList from "./StandardNewsList";

function BlogStandardPage() {
  return (
    <>
      <Breadcrumb pageName="Blog Standard" />
      <div className="blog-news sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-xl-4">
              <SidebarSearch />
              <ServiceList />
              <NewsPost />
              <PopularTag />
              <BannerWiget />
            </div>
            <div className="col-md-6 col-lg-7 col-xl-8">
              <StandardNewsList />
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogStandardPage;
