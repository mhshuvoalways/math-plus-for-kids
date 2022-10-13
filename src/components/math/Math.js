import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import ArrowUp from "../../assets/images/ArrowUp.svg";
import ArrowDown from "../../assets/images/ArrowDown.svg";
import { Context } from "../../app/Context";

const Math = () => {
  const [addition, setAddition] = useState(true);
  const [subtraction, setSubtraction] = useState(false);
  const [multiplications, setMultiplications] = useState(false);

  const context = useContext(Context);

  return (
    <div>
      <div className="math container">
        <div className="math-content">
          <div className="math-top">
            <div className="math-flex">
              <p className="math-title">{context.math.addition.title}</p>
              <div
                className="math-content-expend"
                onClick={() => setAddition(!addition)}
              >
                {addition ? (
                  <>
                    <p className="math-content-expend-text">See less</p>
                    <img src={ArrowUp} alt="ArrowUp" />
                  </>
                ) : (
                  <>
                    <p className="math-content-expend-text">See All</p>
                    <img src={ArrowDown} alt="ArrowDown" />
                  </>
                )}
              </div>
            </div>
            <p className="math-description">
              {context.math.addition.description}
            </p>
          </div>
          {addition && (
            <motion.div
              className="math-main-option"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, height: "100%" }}
            >
              {context.math.addition.options.map((el) =>
                el.filterItems.map(
                  (item) =>
                    item === context.isActiveId && (
                      <div
                        className="math-option"
                        key={el._id}
                        onClick={() => context.modalHandler(el)}
                      >
                        <p className="math-option-number">{el.number}</p>
                        <p className="math-option-title">{el.title}</p>
                        <p className="math-option-description">
                          {el.description}
                        </p>
                      </div>
                    )
                )
              )}
            </motion.div>
          )}
        </div>
      </div>
      <div className="math container">
        <div className="math-content">
          <div className="math-top">
            <div className="math-flex">
              <p className="math-title">{context.math.subtraction.title}</p>
              <div
                className="math-content-expend"
                onClick={() => setSubtraction(!subtraction)}
              >
                {subtraction ? (
                  <>
                    <p className="math-content-expend-text">See less</p>
                    <img src={ArrowUp} alt="ArrowUp" />
                  </>
                ) : (
                  <>
                    <p className="math-content-expend-text">See All</p>
                    <img src={ArrowDown} alt="ArrowDown" />
                  </>
                )}
              </div>
            </div>
            <p className="math-description">
              {context.math.subtraction.description}
            </p>
          </div>
          {subtraction && (
            <motion.div
              className="math-main-option"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, height: "100%" }}
            >
              {context.math.subtraction.options.map((el) =>
                el.filterItems.map(
                  (item) =>
                    item === context.isActiveId && (
                      <div
                        className="math-option"
                        key={el._id}
                        onClick={() => context.modalHandler(el)}
                      >
                        <p className="math-option-number">{el.number}</p>
                        <p className="math-option-title">{el.title}</p>
                        <p className="math-option-description">
                          {el.description}
                        </p>
                      </div>
                    )
                )
              )}
            </motion.div>
          )}
        </div>
      </div>
      <div className="math container">
        <div className="math-content">
          <div className="math-top">
            <div className="math-flex">
              <p className="math-title">{context.math.multiplications.title}</p>
              <div
                className="math-content-expend"
                onClick={() => setMultiplications(!multiplications)}
              >
                {multiplications ? (
                  <>
                    <p className="math-content-expend-text">See less</p>
                    <img src={ArrowUp} alt="ArrowUp" />
                  </>
                ) : (
                  <>
                    <p className="math-content-expend-text">See All</p>
                    <img src={ArrowDown} alt="ArrowDown" />
                  </>
                )}
              </div>
            </div>
            <p className="math-description">
              {context.math.multiplications.description}
            </p>
          </div>
          {multiplications && (
            <motion.div
              className="math-main-option"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, height: "100%" }}
            >
              {context.math.multiplications.options.map((el) =>
                el.filterItems.map(
                  (item) =>
                    item === context.isActiveId && (
                      <div
                        className="math-option"
                        key={el._id}
                        onClick={() => context.modalHandler(el)}
                      >
                        <p className="math-option-number">{el.number}</p>
                        <p className="math-option-title">{el.title}</p>
                        <p className="math-option-description">
                          {el.description}
                        </p>
                      </div>
                    )
                )
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Math;
