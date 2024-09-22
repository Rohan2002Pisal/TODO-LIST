import React from 'react'

function TodoInput({Addtodo , todoValue , settodoValue}) {
   

  return (
   <header>

      <input value={todoValue} onChange={(e) => {
        settodoValue(e.target.value)
      }} placeholder='Enter todo.....'/>

      <button onClick={() => {
        Addtodo(todoValue)
        settodoValue('')
      }}> Add </button>

   </header>
  )
}

export default TodoInput;