import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(getLocalStorage());

    function getLocalStorage() {
        let list = JSON.parse(localStorage.getItem("Todos")) || [];
        return list;
    }

    const createTodo = todo => {
        const newTodo = [...todos, todo];

        setTodos(newTodo);
    };

    const completeTodo = id => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        setTodos(newTodos);
    };

    const clearCompletedTodos = () => {
        const newTodos = todos.filter(todo => !todo.completed);
        setTodos(newTodos);
        localStorage.setItem("Todos", JSON.stringify(todos));
    };

    return (
        <TodoContext.Provider value={{ todos, createTodo, completeTodo, clearCompletedTodos }}>
            {children}
        </TodoContext.Provider>
    );
};
