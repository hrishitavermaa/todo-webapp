const express = require("express");
const { todoController } = require("../controllers/todo");

const router = express.Router();

router
  .route("/todo")
  .get(todoController.fetchTodo)
  .post(todoController.createTodo)
  .put(todoController.updateTodo)
  .delete(todoController.deleteTodo);

router.route("/todo/complete").put(todoController.completeTodo);

router.route("/todos").get(todoController.fetchAllTodos);

module.exports = router;
