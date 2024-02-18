const Task = require("../models/task");

const asyncWrapper=require("../middlewares/asyncWrapper")
const {  createCustomError }=require("../errors/customError")
// const getAllTasks = asyncWrapper(async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     // res.status(200).json(tasks);
//     res
//       .status(200)
//       .json({ status: "success", data: { tasks, amount: tasks.length } });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//     console.log(error);
//   }
// });
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    // res.status(200).json(tasks);
    res
      .status(200)
      .json({ status: "success", data: { tasks, amount: tasks.length } });

});
const getTask = asyncWrapper(async (req, res,next) => {
    const { id } = req.params;
    // const task = await Task.findById(id);
    const task = await Task.findOne({ _id: id });

    if (!task) {
     return next(createCustomError(`No task with id  ${id}`,404))
      //------------------------------------------------------------------
      // const error=new Error("Not Found")
      // error.status=400
      // return next(error)
      //------------------------------------------------------------------
      // return res.status(404).json({ message: "No task with id " + id });
    }

    res.status(200).json(task);
 
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
 
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const { label, completed } = req.body;
  // const task = await Task.findOneAndUpdate()
  const task = await Task.findByIdAndUpdate(id, {
    label: label,
    completed: completed,
  });
  if (!task) {
    return next(createCustomError(`No task with id  ${id}`,404))

  }

  res.status(200).json({ message: "Task updated!" });

});

const deleteTask = asyncWrapper(async (req, res) => {
    const { id } = req.params;

    const task = await Task.findOneAndDelete({ _id: id });
    // const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return next(createCustomError(`No task with id  ${id}`,404))
    }
    res.status(200).json({ task });
  
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
