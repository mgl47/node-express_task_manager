const task=require("../models/task")
const express = require("express");

const getAllTasks = (req, res) => {
  res.send("all items");
};
const getTask = (req, res) => {
  res.send("Task");
};

const createTask = (req, res) => {
  res.send("Task created");
};

const updateTask = (req, res) => {
  res.send("Task updated");
};

const deleteTask = (req, res) => {
  res.send("Task deleted");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
