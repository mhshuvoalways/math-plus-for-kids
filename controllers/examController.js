const Exam = require("../models/Exam");
const serverError = require("../utils/serverError");

const createExamID = (req, res) => {
  const { examID, sessionID } = req.body;
  const examObj = {
    sessionID,
    examID,
  };
  new Exam(examObj)
    .save()
    .then((response) => {
      res.status(200).json({
        message: "Exam create successful",
        response,
      });
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  createExamID,
};
