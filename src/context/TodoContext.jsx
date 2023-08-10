import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
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

    return (
        <TodoContext.Provider value={{ todos, createTodo, completeTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
