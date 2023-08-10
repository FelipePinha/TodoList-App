import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";

const Todo = ({ name, completed, id }) => {
    const { completeTodo } = useContext(TodoContext);

    return (
        <div className="todo" onClick={() => completeTodo(id)}>
            <div className="check-border">
                <div className={completed ? "check" : ""}></div>
            </div>
            <h3 className={completed ? "completed" : ""}>{name}</h3>
        </div>
    );
};

export default Todo;
