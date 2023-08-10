const Todo = ({ name, completed }) => {
    return (
        <div className="todo">
            <div className="check-border">
                <div className={completed ? "check" : ""}></div>
            </div>
            <h3 className={completed ? "completed" : ""}>{name}</h3>
        </div>
    );
};

export default Todo;
