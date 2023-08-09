import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import TodoFilter from "./components/TodoFilter";

import "./styles/app.css";

function App() {
    return (
        <section className="todos">
            <div className="center">
                <h1>TAREFAS</h1>
                <div className="todo-wrapper">
                    <TodoForm />
                    <div className="todoBox">
                        <Todo />
                        <TodoFilter />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;
