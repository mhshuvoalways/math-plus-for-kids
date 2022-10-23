require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./config/db");

const examRouter = require("./routers/examRouter");
const questionRouter = require("./routers/questionRouter");
const sessionRouter = require("./routers/sessionRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", examRouter);
app.use("/api", questionRouter);
app.use("/api", sessionRouter);

app.get("/", (req, res) => {
  res.send(
    "The Math Plus project aiming to help k-5 students get better at math"
  );
});

db(app);
