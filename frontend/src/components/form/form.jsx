import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { allTodosAtom, errorAtom } from "../../store/atoms/todo";
import { createTodo } from "../../actions/todo";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useRecoilState(errorAtom);
  const setTodos = useSetRecoilState(allTodosAtom);

  const inputCss =
    "block outline-none bg-todo rounded-lg border-2 border-input px-3 py-2 w-[350px] mb-5 focus:border-yellow-500 resize-none ";

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createTodo(title, description, priority, setError, setTodos);

    setTitle("");
    setDescription("");
    setPriority("");
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-3">
          Add a <span className="text-yellow-500">Todo</span>
        </h1>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter a title"
          className={inputCss}
          required
        />
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Enter a description"
          className={inputCss + "h-[100px]"}
          required
        />
        <input
          type="number"
          value={priority}
          onChange={(e) => {
            setPriority(e.target.value);
          }}
          placeholder="Enter priority"
          className={inputCss}
          required
        />
        <button type="submit" className="bg-yellow-500 px-7 py-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
