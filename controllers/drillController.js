const Drill = require("../models/Drill");
const serverError = require("../utils/serverError");

const createDrill = (req, res) => {
  const { drillID, sessionID } = req.body;
  const drillObj = {
    sessionID,
    drillID,
  };
  new Drill(drillObj)
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
  createDrill,
};
