const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const sessionSchema = new Schema(
  {
    sessionID: String,
    browserName: String,
    browserType: String,
    browserOS: String,
    browserVersion: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("session", sessionSchema);
