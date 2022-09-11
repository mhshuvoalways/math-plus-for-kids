import React from "react";
import Header from "./header/Header";
import Filter from "./filter/Filter";
import Math from "./math/Math";
import Footer from "./footer/Footer";

const index = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Filter />
        <Math />
      </div>
      <Footer />
    </div>
  );
};

export default index;
