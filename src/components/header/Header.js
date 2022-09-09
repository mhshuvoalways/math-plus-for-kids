import React, { useState } from "react";
import Logo from "../../assets/images/Logo.svg";

const Header = () => {
  const [navShow, setNavShow] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            {navShow ? (
              <i
                className="fa-solid fa-xmark header-bar-icon"
                onClick={() => setNavShow(false)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-bars header-bar-icon "
                onClick={() => setNavShow(true)}
              ></i>
            )}
            <img src={Logo} alt="Logo" className="header-logo-image" />
          </div>
          <nav className="nav-desktop">
            <p className="nav-desktop-item">Drills</p>
            <p className="nav-desktop-item">How it works</p>
            <p className="nav-desktop-item">About</p>
          </nav>
        </div>
      </div>
      {navShow && (
        <nav className="nav-mobile">
          <p className="nav-mobile-item">Drills</p>
          <p className="nav-mobile-item">How it works</p>
          <p className="nav-mobile-item">About</p>
        </nav>
      )}
    </div>
  );
};

export default Header;
