import { useState } from "react";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([
    {
      text: "Learn React",
      date: "2025-12-21",
      completed: false,
    },
  ]);

  const addTodo = () => {
    if (!task.trim() || !date) return;

    setTodos([
      ...todos,
      { text: task, date, completed: false },
    ]);

    setTask("");
    setDate("");
  };

 
  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  
  const darkTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div className="app">
      {}
      <header className="app-header">
        <h1>React Todo List</h1>
        <button className="theme-toggle" onClick={darkTheme}>
          change theme
        </button>
      </header>

      {}
      <div className="container">
        {}
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button onClick={addTodo}>Add</button>
        </div>

        {/* Todo List */}
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`todo-item ${
                todo.completed ? "completed" : ""
              }`}
            >
              <div className="todo-info">
                <p className="todo-text">{todo.text}</p>
                <p className="todo-date">{todo.date}</p>
              </div>

              <div className="actions">
                {/* Toggle */}
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(index)}
                  />
                  <span className="slider">
                    {todo.completed
                      ? "Completed"
                      : "Not Completed"}
                  </span>
                </label>

                {/* Delete */}
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(index)}
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
