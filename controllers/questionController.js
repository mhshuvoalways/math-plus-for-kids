const Question = require("../models/Question");
const serverError = require("../utils/serverError");

const createQuestion = (req, res) => {
  const examID = req.params.examID;
  const {
    sessionID,
    _id,
    firstNumber,
    secondNumber,
    currectAnsware,
    oparation,
    second,
    miliSecond,
    userAnsware,
    isCurrect,
  } = req.body;
  const questionObj = {
    sessionID,
    examID,
    questionID: _id,
    oparation,
    firstNumber,
    secondNumber,
    answer: userAnsware,
    currectAnswer: currectAnsware,
    second,
    miliSecond,
    isCorrect: isCurrect,
  };
  new Question(questionObj)
    .save()
    .then((response) => {
      res.status(200).json({
        message: "Question create successful",
        response,
      });
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  createQuestion,
};
