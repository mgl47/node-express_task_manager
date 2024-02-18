const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    // const task = await Task.findById(id);
    const task = await Task.findOne({ _id: id });

    if (!task) {
      return res.status(404).json({ message: "No task with id " + id });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { label, completed } = req.body;
  // const task = await Task.findOneAndUpdate()
  const task = await Task.findByIdAndUpdate(id, {
    label: label,
    completed: completed,
  });

  res.status(200).json({ message: "Task updated!" });

  try {
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOneAndDelete({ _id: id });
    // const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: "No task with id " + id });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
