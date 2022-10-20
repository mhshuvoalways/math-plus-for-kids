const router = require("express").Router();
const { sessionCreate } = require("../controllers/sessionController");

router.post("/session", sessionCreate);

module.exports = router;
