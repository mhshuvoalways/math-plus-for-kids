import React from "react";

const Footer = ({ footer }) => {
  return (
    <footer>
      <div className="container">
        <div className="footer-flex">
          <div>
            <img src={footer.logo.image} alt="Logo" className="footer-logo" />
            <p className="footer-year">{footer.logo.year}</p>
          </div>
          <div className="footer-menu">
            {footer.nav.map((el) => (
              <p className="footer-menu-item" key={el._id}>
                {el.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
