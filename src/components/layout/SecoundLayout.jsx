import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HomePage2 from "../pages/Home2/HomePage2";

function SecoundLayout() {
  return (
    <>
      <div className="dark">
        <Header />
        <HomePage2 />
        <Footer />
      </div>
    </>
  );
}

export default SecoundLayout;
