import React from "react";
import { motion } from "framer-motion";
import ScoreImg from "../../assets/images/Score.svg";
import RightImg from "../../assets/images/Right.svg";
import WrongImg from "../../assets/images/Wrong.svg";

const Score = ({ doitagainHandler, answare, overallScore }) => {
  return (
    <div>
      <div className="overview">
        <div
          className="score-score"
          style={{ backgroundImage: `url(${ScoreImg})` }}
        >
          <p className="score-score-number">{overallScore.exactScore}</p>
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
              {overallScore.percentScore}%
            </p>
            <p className="score-completion-complete">Completion</p>
          </div>
          {/* <div className="overview-card">
            <div className="score-completion-number score__total-number">
              <p>{mathLength}</p>
            </div>
            <p className="score-completion-complete">Total Questions</p>
          </div> */}
          <div className="overview-card">
            <div className="score-completion-number score__total-number">
              <p>{overallScore.timeSpent}</p>
            </div>
            <p className="score-completion-complete">Time Spent</p>
          </div>
          <div className="overview-card">
            <div className="score-completion-number score__total-correct">
              <p>{overallScore.currectAnswer}</p>
            </div>
            <p className="score-completion-complete">Correct answers</p>
          </div>
          <div className="overview-card">
            <div className="score-completion-number score__total-wrong">
              <p>{overallScore.wrongAnswer}</p>
            </div>
            <p className="score-completion-complete">Wrong answers</p>
          </div>
        </div>
        <div className="short-overview">
          {answare.map((answare) => (
            <div className="short-overview-items" key={answare._id}>
              <div className="short-overview-items-check">
                <div>
                  <img
                    src={answare.isCurrect ? RightImg : WrongImg}
                    alt=""
                    className="short-overview-items-icon"
                  />
                </div>
                <div>
                  <p>{`${answare.firstNumber} ${answare.oparation} ${answare.secondNumber} = ${answare.userAnsware}`}</p>
                  {answare.isCurrect ? null : (
                    <p className="short-overview-items-check-right-ans">
                      Right answer: {answare.currectAnsware}
                    </p>
                  )}
                </div>
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
