import React from 'react'
import Title from './Components/Title'
import AddTodo from './Components/AddTodo'

export default function App() {
  return (
    <>
     <div className='shadow p-3 mb-5 bg-body-tertiary rounded '>
    <center>
    <Title />
    <AddTodo />
    </center>
    </div>
</>

  )
}
