
import { useEffect, useState } from 'react'
import './App.css'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import TodoCard from './Components/TodoCard';


function App() {
  

const [todos , settodos] = useState([]);

const [todovalue , settodoValue] = useState([]);


function perisistData(newList){
  localStorage.setItem('todos' , JSON.stringify({todos : newList}))
}
  
function handleAddtodo(newtask) {
   const newTodo = [...todos , newtask];
   perisistData(newTodo)
   settodos(newTodo);
}


function handleDeletetodo(index){
   const newTodo = todos.filter((el ,idx) => {
     return idx !== index;
   })
   perisistData(newTodo);
   settodos(newTodo);
}


function handleUpdatetodo(index){
  const ValuetobeEdited = todos[index]
  settodoValue(ValuetobeEdited)
  handleDeletetodo(index)
}


//jo add kiye hai vo still display rahe even after the page refreshing
useEffect( () => {
if(!localStorage){
  return
}

let localtodo = localStorage.getItem('todos')

if(!localtodo){
  return
}

localtodo = JSON.parse(localtodo).todos
settodos(localtodo);

} , [])

  return (
    <>
        <TodoInput Addtodo = {handleAddtodo} todoValue={todovalue} settodoValue={settodoValue} />
        <TodoList todos={todos} Deletetodo = {handleDeletetodo} Updatetodo ={handleUpdatetodo} />

        
    </>
  )
}

export default App






// flow of the Components:  
  // App -> TodoInput -> TodoList -> TodoCard
  // |
// (main) 