import React, { useState } from 'react'

export default function Counter() {

    let [count , setcount] = useState(0);
  
   let AddCount = () => {
     setcount((prevCount) => prevCount + 1)
   }

  return (
      <header>
        <h1>Count {count} </h1>
       <button onClick={AddCount}> Add </button>
       
       </header>
    
  )
}


// Key Difference:

// Function Reference (onClick={AddCount}):

// Directly passes the function reference.
// More efficient because it avoids creating a new function on each render.
// Ideal when no additional operations or arguments are needed.


// Arrow Function (onClick={() => { AddCount() }}):

// Creates a new function on every render.
// Useful when you need to pass arguments to AddCount() or want to execute additional logic when the button is clicked.


// IMP 
//Final Notes:
// Best Practice: Use onClick={Addcount} for cleaner, 
// more efficient code unless you need to pass arguments or perform additional actions, in which case onClick={() => Addcount()} is necessary.


// 1. Valid

// function Addcount() {
//   setcount((preCount) => {
//     return preCount + 1;
//   });
// }
// <button onClick={Addcount}>Add</button>

// Why it's valid: Here, onClick={Addcount} passes the reference to the Addcount function. When the button is clicked, Addcount will be invoked. This is the correct way to handle event listeners in React.



// 2. Invalid


// function Addcount() {
//   setcount((preCount) => {
//     return preCount + 1;
//   });
// }
// <button onClick={Addcount()}>Add</button>

// Why it's invalid: Addcount() calls the function immediately when the component renders, instead of waiting for the click event. It won't work because the function is executed as soon as the button is rendered, and nothing is passed to the onClick event.




// 3. Valid

// function Addcount() {
//   setcount((preCount) => preCount + 1);
// }
// <button onClick={Addcount}>Add</button>

// Why it's valid: Like example 1, onClick={Addcount} passes a function reference. The only difference is the arrow function inside setcount is written in a more concise form (preCount => preCount + 1), which is perfectly fine.



// 4. Invalid

// function Addcount() {
//   setcount((preCount) => preCount + 1);
// }
// <button onClick={Addcount()}>Add</button>

// Why it's invalid: This has the same issue as example 2. The function Addcount() is invoked immediately when the component renders, not when the button is clicked. Therefore, it is not valid.


// 5. Invalid

// function Addcount() {
//   setcount((preCount) => {
//     return preCount + 1;
//   });
// }
// <button onClick={() => { Addcount }}>Add</button>

// Why it's invalid: This doesn't work because you're passing a function reference inside an arrow function, but you're not actually calling the function Addcount. To fix this, you need to call Addcount() inside the arrow function. This version doesn't execute Addcount when clicked.


// 6. Valid

// function Addcount() {
//   setcount((preCount) => {
//     return preCount + 1;
//   });
// }
// <button onClick={() => { Addcount() }}>Add</button>

// Why it's valid: This is also a valid option. By using an arrow function onClick={() => { Addcount() }}, you are ensuring that Addcount is only called when the button is clicked, not when the component is rendered. The arrow function delays the execution of Addcount() until the click event occurs.


// Note:

// Same for arrow function 

// const AddCount = () => { }
 
// with all 6 types are same 