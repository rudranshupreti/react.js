import React from 'react'
import './todo.css'
import { useState } from 'react'
const todo = () => {
  const [Task, setTask]= useState();
  const [TaskList, setTaskList]= useState([]);
  const handeInputChange = (value) => {
    setTask(value);}
    const handleFromSubmit = (event) => {
      event.preventDefault();
      console.log(Task);
      if(!Task) return;
    if(TaskList.includes(Task)) return alert('Task already exists');
    setTaskList((prevTask) => [...prevTask, Task]);
    setTask('');
    }
  return (
    <>
    <section>
      <header>
        <h1>todo list</h1>
      </header>
      <form onSubmit={handleFromSubmit} ><div>
        <input type="text" autoComplete='off' value={Task} onChange={(event) =>handeInputChange( event.target.value)  } />
      </div>
      <div>
        <button type="submit">add task</button>
      </div>
      </form>
    </section>
    <section>
      <h2>Task List</h2>
      <ul>
        {TaskList.map((Task,index)=>(
          <li key={index}>
            <span>{Task}</span>
            <button >add</button>
            <button>delete</button>
          </li>
        ))
        }
        
      </ul>
    </section>
    </>
  )
}

export default todo
