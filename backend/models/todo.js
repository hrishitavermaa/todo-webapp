const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  todos: [
    {
      title: {
        type: String,
        unique: true,
      },
      description: {
        type: String,
      },
      completed: {
        type: Boolean,
        default: false,
      },
      priority: {
        type: Number,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

const Todo = new mongoose.model("todos", TodoSchema);

module.exports = {
  Todo,
};
