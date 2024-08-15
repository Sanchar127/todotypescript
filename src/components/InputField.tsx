import React, { useRef } from 'react';
import "./style.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
 const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e)=>{handleAdd(e) 
    inputRef.current?.blur()}}>
      <input
      ref={inputRef}
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter a name of Games you like'
        className='input__box'
      />
      <button className='input_submit' type='submit'>Add</button>
    </form>
  );
}

export default InputField;
