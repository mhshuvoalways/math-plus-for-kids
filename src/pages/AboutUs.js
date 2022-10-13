import React from "react";
import Header from "../components/header/Header";
import AboutUs from "../components/aboutUs/AboutUs";
import Footer from "../components/footer/Footer";

const AboutUsPage = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
