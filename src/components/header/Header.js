import React, { useState } from "react";

const Header = ({ header }) => {
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
            <img
              src={header.logo.image}
              alt="Logo"
              className="header-logo-image"
            />
          </div>
          <nav className="nav-desktop">
            {header.nav.map((el) => (
              <p className="nav-desktop-item" key={el._id}>
                {el.name}
              </p>
            ))}
          </nav>
        </div>
      </div>
      {navShow && (
        <nav className="nav-mobile">
          {header.nav.map((el) => (
            <p className="nav-mobile-item" key={el._id}>
              {el.name}
            </p>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Header;
