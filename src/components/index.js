import React from "react";
import Header from "./header/Header";
import Filter from "./filter/Filter";
import Math from "./math/Math";
import Footer from "./footer/Footer";

const index = () => {
  return (
    <div>
      <Header />
      <Filter />
      <Math />
      <Footer />
    </div>
  );
};

export default index;
