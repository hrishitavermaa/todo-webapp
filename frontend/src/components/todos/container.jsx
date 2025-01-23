import { useRecoilValueLoadable } from "recoil";
import TodoCard from "./card";
import { allTodosAtom } from "../../store/atoms/todo";

export default function TodoContainer() {
  const todosLoadable = useRecoilValueLoadable(allTodosAtom);

  return (
    <div className="w-full px-10">
      <h1 className="text-3xl font-bold mb-3">
        Your <span className="text-yellow-500">Tasks</span>
      </h1>
      {todosLoadable.state === "hasValue" ? (
        todosLoadable.contents.length > 0 ? (
          todosLoadable.contents.map((todo) => (
            <TodoCard
              key={todo._id}
              id={todo._id}
              title={todo.title}
              description={todo.description}
              completed={todo.completed}
              priority={todo.priority}
            />
          ))
        ) : (
          <div>No task for now...</div>
        )
      ) : todosLoadable.state === "loading" ? (
        <div>Loading...</div>
      ) : (
        <div>Error loading todos</div>
      )}
    </div>
  );
}
