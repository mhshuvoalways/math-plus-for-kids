import React from "react";
import LogoFooter from "../../assets/images/LogoFooter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-flex">
          <div>
            <img src={LogoFooter} alt="Logo" className="footer-logo" />
            <p className="footer-year">2022 </p>
          </div>
          <div className="footer-menu">
            <p className="footer-menu-item">About</p>
            <p className="footer-menu-item">Contact us</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
