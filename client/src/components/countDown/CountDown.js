import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Countbg from "../../assets/images/Countbg.svg";

const Intro = ({ countFinishHandler, modalObj }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount((prevState) => prevState - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    } else if (count === 0) {
      const timer = setTimeout(() => {
        countFinishHandler();
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [count, countFinishHandler]);

  return (
    <div>
      <p className="math-intro-title math-intro-title__center">
        {modalObj.modal.title}
      </p>
      <div className="count">
        <div
          className="count-bg"
          style={{ backgroundImage: `url(${Countbg})` }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 0 }}
            transition={{
              duration: 1,
              repeat: 5,
            }}
          >
            <p className="count-start">{count > 0 ? count : "Go!"}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
