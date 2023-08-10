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

    return <TodoContext.Provider value={{ todos, createTodo }}>{children}</TodoContext.Provider>;
};
