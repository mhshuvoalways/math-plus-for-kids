const Session = require("../models/Session");
const serverError = require("../utils/serverError");

const sessionCreate = (req, res) => {
  const { sessionID, browserName, browserType, browserOS, browserVersion } =
    req.body;
  const sessionObj = {
    sessionID,
    browserName,
    browserType,
    browserOS,
    browserVersion,
  };
  new Session(sessionObj)
    .save()
    .then((response) => {
      res.status(200).json({
        message: "Session create successful",
        response,
      });
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  sessionCreate,
};
