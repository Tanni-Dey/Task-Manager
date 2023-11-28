const { createCustomError } = require("../errors/customError");
const asyncWrapper = require("../middleware/asyncWrapper");
const Task = require("../models/task");

//get all task
const getAllTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

//create single task
const createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  if (!task) {
    return next(createCustomError("Task not created", 404));
  }
  res.status(200).json({ task });
});

//get single task by id
const getTask = asyncWrapper(async (req, res, next) => {
  const taskId = req.params.id;
  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    return next(createCustomError(`No task with id: ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

//update single task by id
const updateTask = asyncWrapper(async (req, res, next) => {
  const taskId = req.params.id;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body);
  if (!task) {
    return next(createCustomError(`No task with id: ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

//delete single task
const deleteTask = asyncWrapper(async (req, res, next) => {
  const taskId = req.params.id;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
