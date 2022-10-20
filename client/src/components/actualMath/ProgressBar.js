import React from "react";
import { motion } from "framer-motion";

const ProgressBarCompo = ({ mathCount, answare }) => {
  const percent = (100 / mathCount.finalMath.math.length) * answare.length;
  return (
    <div className="progress-bar">
      <p className="progress-bar-percent">{`${answare.length} of ${mathCount.finalMath.math.length}`}</p>
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
