import React from "react";
import { motion } from "framer-motion";
import ScoreImg from "../../assets/images/Score.svg";
import RightImg from "../../assets/images/Right.svg";
import WrongImg from "../../assets/images/Wrong.svg";

const Score = ({ doitagainHandler, answare }) => {
  let score = 0;
  let mathLength = answare.length;
  answare.forEach((el) => {
    if (el.isCurrect) {
      score++;
    }
  });

  return (
    <div className="overview">
      <div
        className="score-score"
        style={{ backgroundImage: `url(${ScoreImg})` }}
      >
        <p className="score-score-number">{score}</p>
        <p className="score-score-text">Your score</p>
      </div>
      <div className="score-score-msg">
        <p className="score-score-gb">Great Job!</p>
        <p className="score-score-des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>
      <div className="overview-score">
        <div className="overview-card">
          <p className="score-completion-number">
            {(100 / mathLength) * score}%
          </p>
          <p className="score-completion-complete">Completion</p>
        </div>
        <div className="overview-card">
          <div className="score-completion-number score__total-number">
            <p className="score-total-number-point"></p>
            <p>{mathLength}</p>
          </div>
          <p className="score-completion-complete">Total Questions</p>
        </div>
        <div className="overview-card">
          <div className="score-completion-number score__total-correct">
            <p className="score-total-number-point score-total-number-point__correct"></p>
            <p>{score}</p>
          </div>
          <p className="score-completion-complete">Correct answers</p>
        </div>
        <div className="overview-card">
          <div className="score-completion-number score__total-wrong">
            <p className="score-total-number-point score-total-number-point__wrong"></p>
            <p>{mathLength - score}</p>
          </div>
          <p className="score-completion-complete">Wrong answers</p>
        </div>
      </div>
      <div className="short-overview">
        {answare.map((answare) => (
          <div className="short-overview-items" key={answare._id}>
            <div className="short-overview-items-check">
              <img
                src={answare.isCurrect ? RightImg : WrongImg}
                alt=""
                className=""
              />
              <p>{`${answare.firstNumber} ${answare.oparation} ${answare.secondNumber} = ${answare.userAnsware}`}</p>
            </div>
            <p className="short-overview-sec-dec">
              Solved in{" "}
              <span className="short-overview-sec-dec__number">
                {answare.second}
              </span>{" "}
              Sec
            </p>
          </div>
        ))}
      </div>
      <motion.div
        className="score-doit-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={doitagainHandler}
      >
        Do it again
      </motion.div>
    </div>
  );
};

export default Score;
