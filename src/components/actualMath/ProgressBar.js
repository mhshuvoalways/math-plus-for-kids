import React from "react";
import { motion } from "framer-motion";

const ProgressBarCompo = ({ mathCount }) => {
  const percent =
    (100 / mathCount.finalMath.math.length) * (mathCount.serialIndex + 1);
  return (
    <div className="progress-bar">
      <p className="progress-bar-percent">{`${mathCount.serialIndex + 1} of ${
        mathCount.finalMath.math.length
      }`}</p>
      <motion.div
        animate={{
          width: `${percent}%`,
        }}
        transition={{ duration: 2 }}
        className="progress-bar-percent-bg"
      ></motion.div>
    </div>
  );
};

export default ProgressBarCompo;
