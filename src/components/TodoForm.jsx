const TodoForm = () => {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <div className="input-wrapper">
                <input type="text" name="todo" placeholder="Digite sua nova tarefa..." />
                <button type="submit">{">"}</button>
            </div>
        </form>
    );
};

export default TodoForm;
