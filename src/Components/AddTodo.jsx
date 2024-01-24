import React from 'react'

export default function AddTodo() {
  return (
    <div className='container '>

      <form className='row'>

        <div className="col-5">

      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue="Add Task.."/>
        </div>
        <div className="col-5 pe-0">

      <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue="Add Task.."/>
        </div>
        <div className="col ms-0">
        <button type="button" class="btn btn-success">Success</button>
        </div>
   
      </form>
    </div>
  )
}
