const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://gedamsahil001:Xgw0LL3zJ8fEuMp4@cluster0.zk0cd.mongodb.net/userappnew?"
); //this is stored in .env file in professional project

//schema

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
