import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const { user } = useAuth();

  const addTodo = (todo) => setTodos([...todos, todo]);
  const editTodo = (editedTodo) => {
    setTodos(todos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo)));
    setTodoToEdit(null);
  };
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const startEditing = (todo) => setTodoToEdit(todo);

  if (!user) {
    return (
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    );
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} editTodo={editTodo} todoToEdit={todoToEdit} />
      <TodoList todos={todos} deleteTodo={deleteTodo} startEditing={startEditing} />
    </div>
  );
};

const AppWrapper = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWrapper;
