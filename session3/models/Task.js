const mongoose = require("mongoose");

//Schema
const taskSchema = new mongoose.Schema({
    taskName: String,
    status: {
        type: String,
        default: "pending"
    },

    isActive: {
        type: Boolean, 
        default: true
    }
});


//Model
  module.exports = mongoose.model("Task", taskSchema);

