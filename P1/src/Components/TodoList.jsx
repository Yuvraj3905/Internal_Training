import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({todoList}) {
  if(todoList.length===0){
    return <div><h1>No Tasks For Today!! Chill!!</h1></div>
  }else{
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col-2">S.NO</th>
            <th scope="col-4">Title</th>
            <th scope="col-6">Description</th>
          </tr>
        </thead>
        <tbody>
      {todoList.map((item, index)=>{
        return <TodoItem key={item} todos={item} indx={index} />
      })}
        </tbody>
      </table>
    </div>
  );
}
}