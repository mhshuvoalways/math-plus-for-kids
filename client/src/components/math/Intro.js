import React from "react";
import { motion } from "framer-motion";
import Human from "./Human";

const Intro = ({ modalObj, getStartedHandler }) => {
  return (
    <div className="math-intro">
      <div className="math-intro-left">
        <div>
          <p className="math-intro-title">{modalObj.modal.title}</p>
          <p className="math-intro-des">{modalObj.modal.description}</p>
        </div>
        <div className="intro-flex-human">
          <div className="intro-example-flex">
            <div>
              <p className="math-intro-example-titile">Example:</p>
              <div className="math-intro-example-example">
                <p className="math-intro-example-number">
                  {modalObj.modal.example.first} =
                </p>
                <p className="math-intro-example-input"></p>
              </div>
            </div>
            <div className="math-intro-example">
              <p className="math-intro-example-titile">But not</p>
              <div className="math-intro-example-example">
                <p className="math-intro-example-number">
                  <span className="math-intro-example-number-wrong">
                    {modalObj.modal.example.second.split(" ")[0]}{" "}
                  </span>
                  {modalObj.modal.example.second.split(" ")[1]}{" "}
                  {modalObj.modal.example.second.split(" ")[2]}
                </p>
                <p className="math-intro-example-input"></p>
              </div>
            </div>
          </div>
          <div className="intro-flex-human-right">
            <Human />
          </div>
        </div>
      </div>
      <div className="intro-right">
        <Human />
      </div>
      <motion.div
        className="math-intro-btn"
        whileHover={{ scale: 1.1 }}
        onClick={getStartedHandler}
      >
        Get Started
      </motion.div>
    </div>
  );
};

export default Intro;
