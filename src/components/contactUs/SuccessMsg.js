import React from "react";
import { Link } from "react-router-dom";
import SucssessMsg from "../../assets/images/successmsg.svg";

const SuccessMsg = () => {
  return (
    <div className="container">
      <div className="successmsg">
        <img src={SucssessMsg} alt="" className="successmsg-icon" />
        <p className="success-title">Thank You!</p>
        <p className="success-description">
          Your message has been successfully submitted.
        </p>
        <Link to="/">
          <p className="success-goto-home-btn">Go to homepage</p>
        </Link>
      </div>
    </div>
  );
};

export default SuccessMsg;
