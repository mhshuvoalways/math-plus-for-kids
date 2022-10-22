const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const drillSchema = new Schema(
  {
    sessionID: String,
    drillID: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("drill", drillSchema);
