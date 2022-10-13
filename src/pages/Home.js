import React from "react";
import Header from "../components/header/Header";
import Filter from "../components/filter/Filter";
import Math from "../components/math/Math";
import Footer from "../components/footer/Footer";
import MathStart from "../components/start/MathStart";

const Home = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Filter />
        <Math />
        <MathStart />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
