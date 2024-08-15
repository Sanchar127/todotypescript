import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../model';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState(false);
  const [editedText, setEditedText] = useState(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id: number) => {
    if (edit) {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, todo: editedText } : todo
      ));
      setEdit(false);
    }
  };
  useEffect(()=>{
    inputRef.current?.focus();
  })
  const inputRef =useRef<HTMLInputElement>(null)

  return (
    <form className='todos__single' onSubmit={(e) => {
      e.preventDefault();
      handleEdit(todo.id);
    }}>
      {edit ? (
        <input
          type='text'
          ref={inputRef}
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={() => handleEdit(todo.id)}
          autoFocus
        />
      ) : (
        <span className="todos__single--text" style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
          {todo.todo}
        </span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
