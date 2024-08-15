import React, { useState } from 'react';

import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">TodoIT</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* Pass the required props here */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
