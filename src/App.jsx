import { useState } from 'react'
import './App.css'
import { TodoList } from '../components/todolist';
import { TodoInput } from '../components/TodoInput';


function App() {
  const [todoList, setTodoList] = useState([
    {id: 0, content: "스터디 하기"},
    {id: 1, content: "과제 하기"},
    {id: 2, content: "블로그 작성 하기"},
  ]);

  return (
    <>
      <div className='container'>
        <h1>TODO LIST</h1>
        <TodoInput todoList={todoList} setTodoList={setTodoList}/>
        <div className='line'/>
        <TodoList todoList={todoList} setTodoList={setTodoList}/>
      </div>
    </>
  )



}

export default App

