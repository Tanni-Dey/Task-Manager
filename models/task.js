const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide task title"],
    trim: true,
    maxLength: [20, "title can not be more than 20 characters"],
  },
  description: {
    type: String,
    required: [true, "must provide task description"],
    trim: true,
    maxLength: [100, "description can not be more than 100 characters"],
  },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  dueDate: {
    type: Date,
    required: [true, "must provide date"],
  },
});

module.exports = mongoose.model("Task", taskSchema);
