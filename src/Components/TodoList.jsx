import React from 'react'
import TodoCard from './TodoCard';

function TodoList(props) {

    const { todos  } = props;
   
  return (
      <div>
           <ul className='main'>
             {
                todos.map((el , idx) => {
                    return (
                   <TodoCard {...props} key={idx} index={idx}> 
                     <p>{el}</p>
                   </TodoCard>
                    )
                })
             }
           </ul>
      </div>
  )
}

export default TodoList;