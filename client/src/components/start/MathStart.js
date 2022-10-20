import React, { useContext } from "react";
import { motion } from "framer-motion";
import Modal from "../modal/Modal";
import MathIntro from "../math/Intro";
import CountDown from "../countDown/CountDown";
import ActualMath from "../actualMath";
import Score from "../score/Score";
import { Context } from "../../app/Context";

const MathStart = () => {
  const context = useContext(Context);

  return (
    <div>
      {context.modal.toggle && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Modal
            modalHandler={context.modalHandler}
            count={context.count}
            answare={context.answare}
          >
            {context.count === "init" && (
              <MathIntro
                getStartedHandler={context.getStartedHandler}
                modalObj={context.modal.modalObj}
              />
            )}
            {context.count === "start" && (
              <motion.div
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <CountDown
                  countFinishHandler={context.countFinishHandler}
                  modalObj={context.modal.modalObj}
                />
              </motion.div>
            )}
            {context.count === "finish" && (
              <motion.div
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <ActualMath
                  modalObj={context.modal.modalObj}
                  mathCount={context.mathCount}
                  mathCountHandler={context.mathCountHandler}
                  answare={context.answare}
                />
              </motion.div>
            )}
            {context.count === "mathdone" && (
              <motion.div
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Score
                  doitagainHandler={context.doitagainHandler}
                  answare={context.answare}
                  overallScore={context.overallScore}
                />
              </motion.div>
            )}
          </Modal>
        </motion.div>
      )}
    </div>
  );
};

export default MathStart;
