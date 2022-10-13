import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../app/Context";

const Footer = () => {
  const context = useContext(Context);
  const footer = context.data.footer;
  const params = window.location.pathname;

  return (
    <footer>
      <div className="container">
        <div className="footer-flex">
          <div>
            <Link to={footer.logo.url}>
              <img src={footer.logo.image} alt="Logo" className="footer-logo" />
            </Link>
            <p className="footer-year">{footer.logo.year}</p>
          </div>
          <div className="footer-menu">
            {footer.nav.map((el) => (
              <Link
                to={el.url}
                className={`
                ${
                  params === el.url
                    ? "nav-desktop-item-active"
                    : "nav-desktop-item"
                }
                    "footer-menu-item"`}
                key={el._id}
              >
                {el.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
