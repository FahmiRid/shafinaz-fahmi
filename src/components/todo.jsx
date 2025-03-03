import React, { useState, useEffect } from "react";
import SideNavigation from "./sideNavigation";
import "../styles/todo.css";
export default function Todo() {
  const [isOpen, setIsOpen] = useState(false);
  const [todoList, setTodoList] = useState(() => {
    const storedTodoList = localStorage.getItem("todoList");
    return storedTodoList ? JSON.parse(storedTodoList) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodoList([...todoList, newTodo]);
      setNewTodo("");
    }
  };
  const handleRemoveTodo = index => {
    setTodoList(todoList.filter((todo, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div className="todo-container">
      <SideNavigation isOpen={isOpen} toggleNavigation={toggleNavigation} />
      <div className="todo-input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="todo-button">
          Add Todo
        </button>
      </div>
      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li key={index} className="todo-item">
            <span className="todo-text">{todo}</span>
            <button
              onClick={() => handleRemoveTodo(index)}
              className="todo-remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
