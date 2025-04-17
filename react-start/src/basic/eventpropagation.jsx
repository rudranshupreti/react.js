import React from 'react'

const eventpropagation = () => {
  const handlegparent = () =>{
    console.log('grparent')
  }
  const handleparent = () =>{
    console.log('parent')
  }
  const handlechild = () =>{
    console.log('child')
  }
  return (
  <>
<section className='main-div'>
   
  <div className='parent' onClick={handleparent}>
  <div className='grandparent' onClick={handlegparent}>

<button className='child' onClick={handlechild}> child div</button>
</div></div>
</section>
  </>
  )
}

export default eventpropagation
