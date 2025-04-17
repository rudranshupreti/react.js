import React from 'react'
import { useState } from 'react'
const Index = () => {
  const [count,setcount] = useState(0)
  return (
    <>
<div>
  <h1>use of Hooks</h1>
  <h1>{count}</h1>
  <button onClick={() => setcount(count +1)}>Increment</button>
  <button onClick ={() => setcount(count -1)}>Decrement</button>

</div>
    </>
  )
}

export default Index
