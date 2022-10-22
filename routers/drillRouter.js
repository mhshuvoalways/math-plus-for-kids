const router = require("express").Router();
const { createDrill } = require("../controllers/drillController");

router.post("/drills", createDrill);

module.exports = router;
