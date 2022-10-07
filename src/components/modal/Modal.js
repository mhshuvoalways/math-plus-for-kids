import React from "react";
import Confetti from "../confetti/Confetti";
import CrossIcon from "../../assets/images/Cross.svg";

const Modal = ({ modalHandler, children, answare, count }) => {
  return (
    <div className="container modal">
      <Confetti answare={answare} count={count} />
      <div className="modal-cross">
        <img
          src={CrossIcon}
          alt=""
          className="modal-cross-icon"
          onClick={modalHandler}
        />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
