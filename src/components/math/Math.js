import React, { useState } from "react";
import ArrowUp from "../../assets/images/ArrowUp.svg";
import ArrowDown from "../../assets/images/ArrowDown.svg";

const Math = ({ math, isActiveId, modalHandler }) => {
  const [addition, setAddition] = useState(true);
  const [subtraction, setSubtraction] = useState(false);
  const [multiplications, setMultiplications] = useState(false);

  return (
    <div>
      <div className="math container">
        <div className="math-content">
          <div className="math-top">
            <div className="math-flex">
              <p className="math-title">{math.addition.title}</p>
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
            <p className="math-description">{math.addition.description}</p>
          </div>
          {addition && (
            <div className="math-main-option">
              {math.addition.options.map((el) =>
                el.filterItems.map(
                  (item) =>
                    item === isActiveId && (
                      <div
                        className="math-option"
                        key={el._id}
                        onClick={() => modalHandler(el)}
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
            </div>
          )}
        </div>
      </div>
      <div className="math container">
        <div className="math-content">
          <div className="math-top">
            <div className="math-flex">
              <p className="math-title">{math.subtraction.title}</p>
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
            <p className="math-description">{math.subtraction.description}</p>
          </div>
          {subtraction && (
            <div className="math-main-option">
              {math.subtraction.options.map((el) =>
                el.filterItems.map(
                  (item) =>
                    item === isActiveId && (
                      <div
                        className="math-option"
                        key={el._id}
                        onClick={() => modalHandler(el)}
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
            </div>
          )}
        </div>
      </div>
      <div className="math container">
        <div className="math-content">
          <div className="math-top">
            <div className="math-flex">
              <p className="math-title">{math.multiplications.title}</p>
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
              {math.multiplications.description}
            </p>
          </div>
          {multiplications && (
            <div className="math-main-option">
              {math.multiplications.options.map((el) =>
                el.filterItems.map(
                  (item) =>
                    item === isActiveId && (
                      <div
                        className="math-option"
                        key={el._id}
                        onClick={() => modalHandler(el)}
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Math;
