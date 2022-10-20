import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ActualMath = ({ mathCountHandler, mathCount, answare }) => {
  const [inputValue, setValue] = useState("");
  const [countSec, setCountSec] = useState(0);
  const [countSubSec, setCountSubSec] = useState(0);
  const [miliSecond, setMiliSecond] = useState(0);

  const mathIndex = mathCount.finalMath.math[mathCount.serialIndex];

  const verticalDesktop = useRef(null);
  const verticalMobile = useRef(null);
  const horizontalDesktop = useRef(null);
  const horizontalMobile = useRef(null);

  const focusHandler = () => {
    if (verticalDesktop.current) {
      verticalDesktop.current.focus();
    }
    if (verticalMobile.current) {
      verticalMobile.current.focus();
    }
    if (horizontalDesktop.current) {
      horizontalDesktop.current.focus();
    }
    if (horizontalMobile.current) {
      horizontalMobile.current.focus();
    }
  };

  useEffect(() => {
    if (verticalDesktop.current) {
      verticalDesktop.current.focus();
    }
    if (verticalMobile.current) {
      verticalMobile.current.focus();
    }
    if (horizontalDesktop.current) {
      horizontalDesktop.current.focus();
    }
    if (horizontalMobile.current) {
      horizontalMobile.current.focus();
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const date = new Date();
      const miliSecond = date.getMilliseconds();
      setMiliSecond(miliSecond);
      setCountSubSec((prevState) => prevState + 1);
    });
    return () => {
      clearTimeout(timer);
    };
  }, [countSubSec]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountSec((prevState) => prevState + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [countSec]);

  const countSecHandler = () => {
    setCountSec(0);
  };

  const onChangeHanlder = (value) => {
    setValue(value);
  };

  const nextHandler = () => {
    answerHandler();
    focusHandler();
  };

  const onKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      answerHandler();
    }
  };

  const answerHandler = () => {
    var temp = Object.assign({}, mathIndex);
    const mathLength = mathCount.finalMath.math.length;
    if (inputValue && mathLength > answare.length) {
      temp.second = `${countSec}.${miliSecond.toString().slice(0, 2)}`;
      temp.miliSecond =
        countSec * 1000 + Number(`${miliSecond.toString().slice(0, 2)}0`);
      temp.userAnsware = inputValue;
      if (temp.currectAnsware === inputValue) {
        temp.isCurrect = true;
      }
      mathCountHandler(temp);
      countSecHandler();
      setValue("");
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
            type="text"
            className="actual-math-answare actual-math-answare__desktop"
            onChange={(event) => {
              onChangeHanlder(event.target.value);
            }}
            onKeyDown={onKeyDownHandler}
            value={inputValue}
            ref={verticalDesktop}
          />
          <input
            type="number"
            className="actual-math-answare actual-math-answare__mobile"
            onChange={(event) => {
              onChangeHanlder(event.target.value);
            }}
            onKeyDown={onKeyDownHandler}
            value={inputValue}
            ref={verticalMobile}
            autoFocus
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
              className="actual-math-answare actual-math-answare__horizontal actual-math-answare-hori-desktop"
              onChange={(event) => {
                onChangeHanlder(event.target.value);
              }}
              size="10"
              onKeyDown={onKeyDownHandler}
              value={inputValue}
              ref={horizontalDesktop}
            />
            <input
              type="number"
              className="actual-math-answare actual-math-answare__horizontal actual-math-answare-hori-mobile"
              onChange={(event) => {
                onChangeHanlder(event.target.value);
              }}
              onKeyDown={onKeyDownHandler}
              value={inputValue}
              ref={horizontalMobile}
              autoFocus
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
