import { atom, selector } from "recoil";
import { fetchAllTodos } from "../../actions/todo";

export const allTodosAtom = atom({
  key: "allTodo",
  default: selector({
    key: "getAllTodo",
    get: fetchAllTodos,
  }),
});

export const errorAtom = atom({
  key: "errorAtom",
  default: "",
});
