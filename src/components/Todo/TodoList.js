import React, { useState } from 'react';
import './TodoList.css';

const TodoList = ({ todos, deleteTodo, startEditing }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTodos = todos.filter(todo =>
    todo.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="todo-list">
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredTodos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <span>{todo.task}</span>
          <button onClick={() => startEditing(todo)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
