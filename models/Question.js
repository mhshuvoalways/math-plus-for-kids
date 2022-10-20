const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const questionSchema = new Schema(
  {
    sessionID: String,
    examID: String,
    questionID: String,
    oparation: String,
    firstNumber: Number,
    secondNumber: Number,
    answer: Number,
    currectAnswer: Number,
    second: Number,
    miliSecond: Number,
    isCorrect: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("question", questionSchema);
