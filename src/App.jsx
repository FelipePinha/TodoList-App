import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import TodoFilter from "./components/TodoFilter";

import "./App.css";

function App() {
    return (
        <section className="todos">
            <h1>Atualize seus compromissos</h1>
            <TodoForm />
            <Todo />
            <TodoFilter />
        </section>
    );
}

export default App;
