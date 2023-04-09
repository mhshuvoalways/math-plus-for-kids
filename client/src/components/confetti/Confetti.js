import React from "react";
import Confetti from "react-confetti";

const ConfettiCompo = ({ answare, count }) => {
  let score = 0;
  let mathLength = answare.length;
  answare.forEach((el) => {
    if (el.isCurrect) {
      score++;
    }
  });

  const scorePercent = (100 / mathLength) * score;

  return (
    <div>
      {count === "mathdone" && (
        <div>
          {scorePercent === 100 && <Confetti numberOfPieces="500" />}
          {scorePercent <= 99 && scorePercent >= 50 && (
            <Confetti numberOfPieces="100" />
          )}
        </div>
      )}
    </div>
  );
};

export default ConfettiCompo;
