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
          {scorePercent === 100 && (
            <Confetti
              numberOfPieces="500"
              style={{ width: "100%", height: "100%" }}
            />
          )}
          {scorePercent >= 50 && (
            <Confetti
              numberOfPieces="100"
              style={{ width: "100%", height: "60%" }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ConfettiCompo;
