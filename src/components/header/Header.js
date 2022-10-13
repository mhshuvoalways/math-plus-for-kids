import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Context } from "../../app/Context";

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const [navShow, setNavShow] = useState(false);

  const context = useContext(Context);
  const header = context.data.header;
  const params = window.location.pathname;

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
            <Link to={header.logo.url}>
              <img src={header.logo.image} alt="Logo" />
            </Link>
          </div>
          <nav className="nav-desktop">
            {header.nav.map((el) => (
              <Link
                to={el.url}
                className={
                  params === el.url
                    ? "nav-desktop-item-active"
                    : "nav-desktop-item"
                }
                key={el._id}
              >
                {el.name}
              </Link>
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
               <Link
                to={el.url}
                className={
                  params === el.url
                    ? "nav-desktop-item-active nav-mobile-item"
                    : "nav-desktop-item nav-mobile-item"
                }
                key={el._id}
              >
                {el.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Header;
