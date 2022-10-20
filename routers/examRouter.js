const router = require("express").Router();
const { createExamID } = require("../controllers/examController");

router.post("/exams", createExamID);

module.exports = router;
