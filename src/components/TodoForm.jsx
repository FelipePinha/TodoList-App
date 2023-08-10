import PlusLight from "../images/plus-light.svg";

const TodoForm = () => {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <div className="input-wrapper">
                <input type="text" name="todo" placeholder="Digite sua nova tarefa..." />
                <button type="submit">
                    <img src={PlusLight} alt="submit" />
                </button>
            </div>
        </form>
    );
};

export default TodoForm;
