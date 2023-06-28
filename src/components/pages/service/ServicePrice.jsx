import React from "react";
import PriceBox from "./PriceBox";

function ServicePrice() {
  return (
    <>
      <section className="pricing-plan sec-mar">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-lg-6 col-xl-5 or2">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Pay Monthly
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Pay Yearly
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6 col-xl-5 or1">
              <div className="title black">
                <span>Pricing Plan</span>
                <h2>Order Now and Supercharge Your Business! </h2>
              </div>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row g-4">
                <PriceBox
                  month="month"
                  cartTitle="SEO Basic Package"
                  cartSubtitle="Small Businesses"
                  price="550.00"
                  featurePages="Website Analysis and Audit "
                  featurePpc="Local Keyword Research "
                  seo="On-Page Optimizationeyword"
                  facebookComplaigns="Google Business Profile Optimization "
                  videoCompligns="Local Citations & Directory Listings  "
                />
                <PriceBox
                  month="month"
                  cartTitle="SEO Pro Package"
                  cartSubtitle="Medium To Big Businesses "
                  price="1 200.00"
                  featurePages="Website Analysis & Audit "
                  featurePpc="Keyword Research & Optimization "
                  seo="Content Development & Optimization"
                  facebookComplaigns="Link Building & Authority Boosting "
                  videoCompligns="Ongoing Performance Tracking "
                />
                <PriceBox
                  month="month"
                  cartTitle="Online Reputation "
                  cartSubtitle="Realtime Google Reviews Pop"
                  price="1 350.00"
                  featurePages="Online Reputation Assessment "
                  featurePpc="Realtime Reviews Pop on Website "
                  seo="Reputation Monitoring "
                  facebookComplaigns="Review Management "
                  videoCompligns="Crisis Management"
                />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row g-4">
                <PriceBox
                  month="year"
                  cartTitle="SEO Pro Package"
                  cartSubtitle="Medium To Big Businesses "
                  price="13 400.00"
                  featurePages="Website Analysis & Audit "
                  featurePpc="Keyword Research & Optimization "
                  seo="Content Development & Optimization"
                  facebookComplaigns="Link Building & Authority Boosting "
                  videoCompligns="Ongoing Performance Tracking "
                />
                <PriceBox
                  month="year"
                  cartTitle="SEO Basic Package"
                  cartSubtitle="Small Businesses"
                  price="5 400.00"
                  featurePages="Website Analysis and Audit "
                  featurePpc="Local Keyword Research "
                  seo="On-Page Optimizationeyword"
                  facebookComplaigns="Google Business Profile Optimization "
                  videoCompligns="Local Citations & Directory Listings"
                />
                <PriceBox
                  month="year"
                  cartTitle="Online Reputation"
                  cartSubtitle="Realtime Google Reviews Pop"
                  price="15 200.00"
                  featurePages="Online Reputation Assessment "
                  featurePpc="Realtime Reviews Pop on Website "
                  seo="Reputation Monitoring"
                  facebookComplaigns="Review Management "
                  videoCompligns="Crisis Management"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicePrice;
