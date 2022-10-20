const router = require("express").Router();
const { createQuestion } = require("../controllers/questionController");

router.put("/exams/:examID/question", createQuestion);

module.exports = router;
