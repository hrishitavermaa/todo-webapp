import TodoForm from "../components/form/form";
import TodoContainer from "../components/todos/container";

export default function Todo() {
    return (
        <div className="grid grid-cols-2 pl-[5rem]">
            <TodoForm />
            <TodoContainer />
        </div>
    )
}