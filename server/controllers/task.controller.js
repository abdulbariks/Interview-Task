const { isValidObjectId } = require("mongoose");
const Task = require("../models/Task");

exports.allTask = async (req, res) => {
  const result = await Task.find();
  res.send(result);
};

exports.allSingleTask = async (req, res) => {
  try {
    const result = await Task.findById(req.params.id);
    if (!result) return res.status(404).json({ message: "Task not found" });
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch task" });
  }
};
exports.createTask = async (req, res) => {
  try {
    const newFormData = req.body;
    console.log(newFormData);
    const result = await Task.insertOne(newFormData);
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: "Task not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
};
exports.deleteTask = async (req, res) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};
