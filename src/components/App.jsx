import React from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";

function Layout({ children }) {
  return (
    <>
      {/* all child componnet under the layout */}
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
