import React from "react";
import Header from "../components/header/Header";
import Howitworks from "../components/howitworks/Howitworks";
import Footer from "../components/footer/Footer";

const HowitworksPage = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Howitworks />
      </div>
      <Footer />
    </div>
  );
};

export default HowitworksPage;
