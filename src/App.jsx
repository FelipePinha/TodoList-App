import { useState } from "react";

import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import TodoFilter from "./components/TodoFilter";

import "./styles/app.css";

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            name: "Estudar",
            completed: false,
        },
        {
            id: 2,
            name: "Trabalhar",
            completed: false,
        },
        {
            id: 3,
            name: "Jogar bola",
            completed: true,
        },
    ]);

    return (
        <section className="todos">
            <div className="center">
                <h1>TAREFAS</h1>
                <div className="todo-wrapper">
                    <TodoForm />
                    <div className="todo-box">
                        {todos.map(todo => (
                            <Todo key={todo.id} name={todo.name} completed={todo.completed} />
                        ))}
                        <TodoFilter />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;
