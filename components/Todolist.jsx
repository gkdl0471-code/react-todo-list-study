import { useState } from "react";

export function TodoList({todoList, setTodoList}) {
  return (
    <ul>
      {todoList.map(todo => (
        <Todo key={todo.id} todo={todo} setTodoList={setTodoList}/>
      ))}
    </ul>
  );
}

function Todo({todo, setTodoList}) {
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false); 
  
  const handleUpdate = () => {
    setTodoList(prev => prev.map(el => el.id === todo.id ? {...el, content: inputValue} : el));
    setIsEditing(false);
  };

  return (
    <>
      <li>
        {!isEditing && (
          <>
          <div className="left">
            <input 
            className="checkbox"
            type="checkbox"/>
            <span className="qqq">{todo.content}</span>
          </div>
          <div className="zzz">
            <button
              className="changeBtn"
              onClick={() => {
                setInputValue(todo.content);
                setIsEditing(true);
              }}
            >
              수정
            </button>
            <button
              className="deleteBtn"
              onClick={() => {
                setTodoList(prev => {
                  return prev.filter(el => el.id !== todo.id);
                })
              }}
            >
              삭제
            </button>
          </div>
          </>
        )}
        {isEditing && (
          <>
          <div className="left">
            <input 
            className="checkbox"
            type="checkbox"/>
              <input 
                className="changeInput"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
          </div>
            <div className="zzz">
              <button
                className="changeBtn"
                onClick={handleUpdate}
              >
                수정완료
              </button>
              <button
                className="deleteBtn"
                onClick={() => {
                  setTodoList(prev => {
                    return prev.filter(el => el.id !== todo.id);
                  })
                }}
              >
                삭제
              </button>
            </div>
          </>
        )}
      </li>
    </>
  )
}