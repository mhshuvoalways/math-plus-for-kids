import React, { useState } from "react";
import ArrowUp from "../../assets/images/ArrowUp.svg";
import ArrowDown from "../../assets/images/ArrowDown.svg";

const Math = () => {
  const [addition, setAddition] = useState(true);
  const [subtraction, setSubtraction] = useState(false);
  const [multiplications, setMultiplications] = useState(false);

  return (
    <div>
      <div className="math container">
        <div className="math-content">
          <div className="math-top">
            <div className="math-flex">
              <p className="math-title">Addition</p>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
            </p>
          </div>
          {addition && (
            <div className="math-main-option">
              <div className="math-option">
                <p className="math-option-number">10</p>
                <p className="math-option-title">Add Upto 10</p>
                <p className="math-option-description">
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
              <div className="math-option">
                <p className="math-option-number">20</p>
                <p className="math-option-title">Add Upto 20</p>
                <p className="math-option-description">
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
              <div className="math-option">
                <p className="math-option-number">30</p>
                <p className="math-option-title">Add Upto 30</p>
                <p className="math-option-description">
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
              <div className="math-option">
                <p className="math-option-number">40</p>
                <p className="math-option-title">Add Upto 40</p>
                <p className="math-option-description">
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="math container">
        <div className="math-content">
          <div className="math-top">
            <div className="math-flex">
              <p className="math-title">Subtraction</p>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
            </p>
          </div>
          {subtraction && (
            <div className="math-main-option">
              <div className="math-option">
                <p className="math-option-number">10</p>
                <p className="math-option-title">Add Upto 10</p>
                <p className="math-option-description">
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
              <div className="math-option">
                <p className="math-option-number">20</p>
                <p className="math-option-title">Add Upto 20</p>
                <p className="math-option-description">
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
              <div className="math-option">
                <p className="math-option-number">30</p>
                <p className="math-option-title">Add Upto 30</p>
                <p className="math-option-description">
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
              <div className="math-option">
                <p className="math-option-number">40</p>
                <p className="math-option-title">Add Upto 40</p>
                <p className="math-option-description">
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="math container">
        <div className="math-content">
          <div className="math-top">
            <div className="math-flex">
              <p className="math-title">Multiplications</p>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
            </p>
          </div>
          {multiplications && (
            <div className="math-main-option">
              <div className="math-option">
                <p className="math-option-number">10</p>
                <p className="math-option-title">Add Upto 10</p>
                <p className="math-option-description">
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
              <div className="math-option">
                <p className="math-option-number">20</p>
                <p className="math-option-title">Add Upto 20</p>
                <p className="math-option-description">
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
              <div className="math-option">
                <p className="math-option-number">30</p>
                <p className="math-option-title">Add Upto 30</p>
                <p className="math-option-description">
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
              <div className="math-option">
                <p className="math-option-number">40</p>
                <p className="math-option-title">Add Upto 40</p>
                <p className="math-option-description">
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Math;
