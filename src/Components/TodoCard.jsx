import React from 'react'

function TodoCard({children , Deletetodo , index , Updatetodo}) {
  return (
    <li className='todoItem' > 
      {children}
     <div className='actionsContainer'> 

        <button onClick={ () => {
            Updatetodo(index)
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
       

        <button onClick={ () => {
            Deletetodo(index)
        }}>
        <i className="fa-solid fa-trash-can"></i>
        </button>
       
     </div>
   
     </li>
  )
}

export default TodoCard;