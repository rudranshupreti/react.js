import React from 'react'
import { useState } from 'react'
const State = () => {
  // let value = 0;
  // const handleButtonClick = () =>{
  //   value++;
  //   console.log(value)
  // }
  const [count,setCount] = useState(0)
  const HandleButtonClick = () =>{
    setCount(count +1)
  }
  return (
    
    <div>
      <h1>
        {count}
      </h1>
      <button onClick={HandleButtonClick}>increment</button>
    </div>
  )
}

export default State
