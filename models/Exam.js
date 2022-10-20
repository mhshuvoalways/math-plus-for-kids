const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const examSchema = new Schema(
  {
    sessionID: String,
    examID: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("exam", examSchema);
