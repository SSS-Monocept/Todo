import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to Gym",
      description: "Go to the gym from 7-9",
      completed: false,
    },
    {
      title: "Study DSA",
      description: "Study DSA from 9-10",
      completed: true,
    },
  ]);

  return (
    <div className="app-container">
      <h1>Welcome to Your Todo List</h1>
      <button
        onClick={() => {
          setTodos([
            ...todos,
            {
              title: "New todo",
              description: "Description of the new todo...",
            },
          ]);
        }}
      >
        Add Todo
      </button>
      {todos.map(function (todo, index) {
        return (
          <Todo
            key={index}
            title={todo.title}
            description={todo.description}
          ></Todo>
        );
      })}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div className="todo-item">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default App;
