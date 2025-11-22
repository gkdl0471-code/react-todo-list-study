import { useEffect, useState } from 'react'
import './App.css'
import { TodoList } from '../components/todolist';
import { TodoInput } from '../components/TodoInput';
import { Clock } from '../components/Clock';
import { TodoSearch } from '../components/TodoSearch';
import { Advice } from '../components/Advice';


function App() {
  const [todoList, setTodoList] = useState([
    {id: 0, content: "스터디 하기"},
    {id: 1, content: "과제 하기"},
    {id: 2, content: "블로그 작성 하기"},
  ]);
  const [searchValue, setSearchValue] = useState("");
  const filterTodo = todoList.filter(todo =>
    todo.content.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className='container'>
      <div className='black'></div>
      <div className='mainContainer'>
        <div className='clockbox'>
          <Clock />
        </div>
        <Advice />
        <h1>TODO LIST</h1>
        <div className='inputBox'>
          <TodoInput todoList={todoList} setTodoList={setTodoList}/>
        </div>
      </div>
      <div className='listContainer'>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        <TodoList todoList={filterTodo} setTodoList={setTodoList}/>
      </div>
    </div>
  )
}



export default App

