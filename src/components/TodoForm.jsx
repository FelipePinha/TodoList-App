import { TodoContext } from "../context/TodoContext";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import PlusLight from "../images/plus-light.svg";

const TodoForm = () => {
    const [todoName, setTodoName] = useState("");
    const { createTodo } = useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();

        if (todoName === "") return;

        createTodo({ id: uuidv4(), name: todoName, completed: false });
        setTodoName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <input
                    onChange={e => setTodoName(e.target.value)}
                    type="text"
                    name="todo"
                    placeholder="Digite sua nova tarefa..."
                    value={todoName}
                />
                <button type="submit">
                    <img src={PlusLight} alt="submit" />
                </button>
            </div>
        </form>
    );
};

export default TodoForm;
