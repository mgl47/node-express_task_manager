const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  label: {
    type:String,
    required: [true, "the label is mandatory"],
    trim: true,
    maxlength: [20, "Label should not have more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("task", taskSchema);
