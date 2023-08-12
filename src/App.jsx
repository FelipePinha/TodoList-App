import { TodoContext } from "./context/TodoContext";
import { useContext, useState } from "react";

import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import TodoFilter from "./components/TodoFilter";

import "./styles/app.css";

function App() {
    const { todos } = useContext(TodoContext);
    const [filter, setFilter] = useState("all");

    return (
        <section className="todos">
            <div className="center">
                <h1>TAREFAS</h1>
                <div className="todo-wrapper">
                    <TodoForm />
                    <div className="todo-box">
                        {todos
                            .filter(todo =>
                                filter === "all"
                                    ? true
                                    : filter === "completed"
                                    ? todo.completed
                                    : !todo.completed
                            )
                            .map(todo => (
                                <Todo
                                    key={todo.id}
                                    name={todo.name}
                                    completed={todo.completed}
                                    id={todo.id}
                                />
                            ))}
                        <TodoFilter setFilter={setFilter} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;
