import React, { useState, useEffect } from 'react';
import './ToDoForm.css';

const TodoForm = ({ addTodo, editTodo, todoToEdit }) => {
  const [task, setTask] = useState('');

  useEffect(() => {
    if (todoToEdit) {
      setTask(todoToEdit.task);
    }
  }, [todoToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoToEdit) {
      editTodo({ ...todoToEdit, task });
    } else {
      addTodo({ task, id: Date.now() });
    }
    setTask('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        required
      />
      <button type="submit">{todoToEdit ? 'Edit Task' : 'Add Task'}</button>
    </form>
  );
};

export default TodoForm;
