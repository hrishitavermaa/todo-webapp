import React, { useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { allTodosAtom } from "../../store/atoms/todo";

export default function TodoCard({
  id,
  title,
  description,
  completed,
  priority,
}) {
  const [isChecked, setIsChecked] = useState(completed);
  const [todos, setTodos] = useRecoilState(allTodosAtom);

  const handleCheckboxChange = async () => {
    if (!isChecked) {
      try {
        await axios.put(`http://localhost:4000/api/v1/todo/complete?id=${id}`);
        setIsChecked(true);
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    }
  };

  const handleDelete = async () => {
    await axios.delete(`api/v1/todo?id=${id}`);
    setTodos(todos.filter((todo) => todo._id != id));
  };

  return (
    <div className="flex items-center gap-x-5 py-3 px-6 bg-todo w-[70%] rounded-lg mt-3 shadow-card">
      <label className="relative cursor-pointer">
        <input
          checked={isChecked}
          onChange={handleCheckboxChange}
          type="checkbox"
          className="sr-only"
          disabled={isChecked}
        />
        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center transition duration-300 
            ${isChecked ? "bg-yellow-500" : "bg-dark"}`}
        >
          {isChecked && (
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </label>
      <div className="w-[330px]">
        <h1 className="text-sm font-semibold">{title}</h1>
        <p className="text-xs text-slate-400">{description}</p>
      </div>
      <h2>{priority}</h2>
      <FaTrashAlt className="text-red-700" onClick={handleDelete} />
    </div>
  );
}
