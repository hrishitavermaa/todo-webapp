const { CatchAsyncError } = require("../middlewares/catchAsyncError");
const {
  recordNotFoundError,
  emptyInputError,
} = require("../middlewares/error");
const { Todo } = require("../models/todo");
const { ErrorHandler } = require("../utils/errorHandler");
const { getAuthPayload, fetchAuthFromCookie } = require("../utils/token");

const todoController = {
  createTodo: CatchAsyncError(async (req, res, next) => {
    const tokenPayload = fetchAuthFromCookie(req);
    const todoPayload = req.body;

    const userTodos = await Todo.findOne({ email: tokenPayload.email });

    if (!userTodos) {
      return next(new ErrorHandler("User not found", 404));
    }

    const existingTodo = userTodos.todos.find(
      (todo) => todo.title === todoPayload.title
    );

    if (existingTodo) {
      return next(new ErrorHandler("Todo with this title already exists", 400));
    }

    userTodos.todos.push(todoPayload);
    await userTodos.save();

    return res.status(200).json({
      success: true,
      message: userTodos.todos,
    });
  }),

  fetchTodo: CatchAsyncError(async (req, res, next) => {
    const todoId = req.query.id;

    if (!todoId) {
      return next(new ErrorHandler("Todo ID is required", 400));
    }

    const todoPayload = await Todo.findOne(
      { "todos._id": todoId },
      { "todos.$": 1 }
    );

    if (!todoPayload || todoPayload.todos.length === 0) {
      return recordNotFoundError(next);
    }

    return res.status(200).json({
      success: true,
      message: todoPayload.todos[0],
    });
  }),

  updateTodo: CatchAsyncError(async (req, res, next) => {
    const todoId = req.query.id;
    const updatePayload = req.body;

    if (!todoId) {
      return next(new ErrorHandler("Todo ID is required", 400));
    }

    const todo = await Todo.findOneAndUpdate(
      { "todos._id": todoId },
      { $set: { "todos.$": updatePayload } },
      { new: true }
    );

    if (!todo) {
      return recordNotFoundError(next);
    }

    return res.status(200).json({
      success: true,
      message: todo,
    });
  }),

  deleteTodo: CatchAsyncError(async (req, res, next) => {
    const todoId = req.query.id;

    if (!todoId) {
      return next(new ErrorHandler("Todo ID is required", 400));
    }

    const todo = await Todo.findOneAndUpdate(
      { "todos._id": todoId },
      { $pull: { todos: { _id: todoId } } },
      { new: true }
    );

    if (!todo) {
      return recordNotFoundError(next);
    }

    return res.status(200).json({
      success: true,
      message: todo,
    });
  }),

  completeTodo: CatchAsyncError(async (req, res, next) => {
    const todoId = req.query.id;

    if (!todoId) {
      return next(new ErrorHandler("Todo ID is required", 400));
    }

    const todo = await Todo.findOneAndUpdate(
      { "todos._id": todoId },
      { $set: { "todos.$.completed": true } },
      { new: true }
    );

    if (!todo) {
      return recordNotFoundError(next);
    }

    return res.status(200).json({
      success: true,
      message: todo,
    });
  }),

  fetchAllTodos: CatchAsyncError(async (req, res, next) => {
    const tokenPayload = fetchAuthFromCookie(req);
    const email = tokenPayload.email;

    if (!email) {
      deleteCookie(res, "token");
      return next(new ErrorHandler("User not authenticated", 401));
    }

    const userTodos = await Todo.findOne({ email: email });

    if (!userTodos) {
      return recordNotFoundError(next);
    }

    return res.status(200).json({
      success: true,
      message: userTodos.todos,
    });
  }),
};

module.exports = {
  todoController,
};
