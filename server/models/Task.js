const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    date: String,
    status: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
