import { useState } from "react";


export function TodoInput ({todoList, setTodoList}) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        className="addInput"
        value={inputValue}
        onChange={e=>setInputValue(event.target.value)}/>
      <button 
        className="addBtn"
        onClick={() => {
          const newTodo = {id: Number(new Date()), content:inputValue};
          const newTodoList = [...todoList, newTodo];
          setTodoList(newTodoList);
          setInputValue("");
        }}>
        추가
      </button>
    </>
  )
}