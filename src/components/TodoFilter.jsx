import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoFilter = ({ filter, setFilter }) => {
    const { clearCompletedTodos, todos } = useContext(TodoContext);

    return (
        <div className="filter-wrapper">
            <h4>
                {todos.length} {todos.length > 1 ? "tarefas" : "tarefa"}
            </h4>
            <ul>
                <li
                    className={`${filter === "all" ? "filter-active" : ""}`}
                    onClick={() => setFilter("all")}
                >
                    Todas
                </li>
                <li
                    className={`${filter === "incomplete" ? "filter-active" : ""}`}
                    onClick={() => setFilter("incomplete")}
                >
                    Ativas
                </li>
                <li
                    className={`${filter === "completed" ? "filter-active" : ""}`}
                    onClick={() => setFilter("completed")}
                >
                    Completas
                </li>
            </ul>
            <button onClick={clearCompletedTodos}>Limpar completas</button>
        </div>
    );
};

export default TodoFilter;
