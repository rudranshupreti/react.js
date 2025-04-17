import React from 'react'
 const user =[
  {name: 'John',age: 30,city: 'New York'},
 {name: 'John2',age: 30,city: 'New York2'},
 { name : 'John3',age: 30,city: 'New York3'},
  {name: 'John4',age: 30,city: 'New York4'},
  ]
const Statepractice = () => { 
 
  return (
    <div>
      <h1>user name </h1>
      {/* ye normal tarika he kisi bhi list ko map karne ka */}
      {/* <ul>{
        user.map((item,index)=>{
          return (
            <li key={index}>
              {item.name} {item.age} {item.city}
            </li>
          )

        })}
      </ul> */}
    </div>
  )
}

export default Statepractice
