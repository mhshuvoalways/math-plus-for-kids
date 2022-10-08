import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ActualMath = ({ mathCountHandler, mathCount }) => {
  const [inputValue, setValue] = useState("");
  const [countSec, setCountSec] = useState(0);

  const mathIndex = mathCount.finalMath.math[mathCount.serialIndex];

  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountSec((prevState) => prevState + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [countSec]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const countSecHandler = () => {
    setCountSec(0);
  };

  const onChangeHanlder = (value) => {
    setValue(value);
  };

  const nextHandler = () => {
    var temp = Object.assign({}, mathIndex);
    if (inputValue) {
      temp.second = countSec;
      temp.userAnsware = inputValue;
      if (temp.currectAnsware === inputValue) {
        temp.isCurrect = true;
      }
      mathCountHandler(temp);
      countSecHandler();
      setValue("");
    }
  };

  const onKeyDownHandler = (event) => {
    var temp = Object.assign({}, mathIndex);
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputValue) {
        temp.second = countSec;
        temp.userAnsware = inputValue;
        if (temp.currectAnsware === inputValue) {
          temp.isCurrect = true;
        }
        mathCountHandler(temp);
        countSecHandler();
        setValue("");
      }
    }
  };

  return (
    <form className="actual-math">
      {mathCount.finalMath.configuration === "vertical" ? (
        <div className="math-vertical">
          <p className="actual-math-number">{mathIndex.firstNumber}</p>
          <p className="actual-math-number actual-math-number-end">
            {mathIndex.oparation} {mathIndex.secondNumber}
          </p>
          <p className="actual-math-border"></p>
          <input
            type="number"
            className="actual-math-answare"
            onChange={(event) => {
              onChangeHanlder(event.target.value);
            }}
            onKeyDown={onKeyDownHandler}
            value={inputValue}
            ref={inputRef}
          />
        </div>
      ) : (
        mathCount.finalMath.configuration === "horizontal" && (
          <div className="math-horizontal">
            <p>{mathIndex.firstNumber}</p>
            <p>
              {mathIndex.oparation} {mathIndex.secondNumber}
            </p>
            <p>=</p>
            <input
              type="text"
              className="actual-math-answare actual-math-answare__horizontal"
              onChange={(event) => {
                onChangeHanlder(event.target.value);
              }}
              onKeyDown={onKeyDownHandler}
              value={inputValue}
              ref={inputRef}
            />
          </div>
        )
      )}
      <motion.div
        className="actual-math-next-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextHandler}
      >
        Next
      </motion.div>
    </form>
  );
};

export default ActualMath;
