import React from 'react';
import "./style.css";
import { Todo } from '../model'; // Ensure this import is correctly pointing to your Todo type
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        
       <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
}
