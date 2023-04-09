require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
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

app.use(express.static(path.resolve(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "client", "build", "index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

db(app);
