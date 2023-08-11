import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoFilter = () => {
    const { clearCompletedTodos, todos } = useContext(TodoContext);

    return (
        <div className="filter-wrapper">
            <h4>
                {todos.length} {todos.length > 1 ? "tarefas" : "tarefa"}
            </h4>
            <ul>
                <li>Todas</li>
                <li>Ativas</li>
                <li>Completas</li>
            </ul>
            <button onClick={clearCompletedTodos}>Limpar completas</button>
        </div>
    );
};

export default TodoFilter;
