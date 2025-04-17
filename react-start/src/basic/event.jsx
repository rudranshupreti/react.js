import React from 'react'
const handleButtonClick = (event) => {
  alert('Button clicked!')
  console.log(event)
}
const Event = () => {
  
  return (
    <div>
      <button
      onClick={handleButtonClick}>Click Me
 </button>

    </div>
  )
}

export default Event
