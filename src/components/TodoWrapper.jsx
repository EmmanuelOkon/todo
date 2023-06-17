import React, { useState, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

const TodoWrapper = () => {
  const getLocalStorage = () => {
    let list = localStorage.getItem("todos");
    if (list) {
      return (list = JSON.parse(localStorage.getItem("todos")));
    } else {
      return [];
    }
  };
  const [todos, setTodos] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, description) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      description: description,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="border border-gray-400 my-[5rem] py-[2rem] px-[6rem] rounded-[5px]">
      <h1 className="text-gray-800  text-[1.75rem] ">Track Your Goals!</h1>
      <p className="text-gray-700 mb-[0.5rem] text-[15px]">
        Write them down here!
      </p>

      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          id={todo.id}
          key={todo.id}
          title={todo.title}
          description={todo.description}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          completed={todo.completed}
        />
      ))}
      {todos.length === 0 ? (
        <p className="text-gray-700 text-[15px]">No tasks to display</p>
      ) : (
        <p className="text-gray-700 text-[15px]">Toggle to mark as completed</p>
      )}
    </div>
  );
};

export default TodoWrapper;
