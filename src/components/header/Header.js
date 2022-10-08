import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = ({ header }) => {
  const [displayNav, setDisplayNav] = useState(false);
  const [navShow, setNavShow] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            {navShow ? (
              <i
                className="fa-solid fa-xmark header-bar-icon"
                onClick={() => {
                  setNavShow(false);
                  setTimeout(() => {
                    setDisplayNav(false);
                  }, 1000);
                }}
              ></i>
            ) : (
              <i
                className="fa-solid fa-bars header-bar-icon "
                onClick={() => {
                  setDisplayNav(true);
                  setNavShow(true);
                }}
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
      {displayNav && (
        <nav className="nav-mobile">
          {header.nav.map((el) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: navShow ? 1 : 0,
                height: navShow ? "50px" : "0px",
              }}
            >
              <p className="nav-mobile-item" key={el._id}>
                {el.name}
              </p>
            </motion.div>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Header;
