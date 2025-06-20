const Task = require("../models/Task");

exports.allTask = async (req, res) => {
  const result = await Task.find();
  res.send(result);
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
