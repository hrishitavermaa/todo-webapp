import axios from "axios";

export const createTodo = async (
  title,
  description,
  priority,
  setError,
  setTodos
) => {
  setError(null);

  if (title.trim() === "" || description.trim() === "" || priority === null) {
    setError("All fields are required.");
    return;
  }

  try {
    const todoPayload = {
      title: title,
      description: description,
      priority: priority,
    };
    const response = await axios.post("https://todo-webapp-51i9.onrender.com/api/v1/todo", todoPayload);

    console.log(response.data.message);
    if (response.data.success) {
      setTodos(
        response.data.message.sort((todoOne, todoTwo) => {
          return todoOne.priority - todoTwo.priority;
        })
      );
    }
  } catch (error) {
    setError(error.response.data.message);
  }
};

export const fetchAllTodos = async () => {
  const response = await axios.get("https://todo-webapp-51i9.onrender.com//api/v1/todos");
  const todos = response.data.message;
  todos.sort((todoOne, todoTwo) => {
    return todoOne.priority - todoTwo.priority;
  });
  return todos;
};
