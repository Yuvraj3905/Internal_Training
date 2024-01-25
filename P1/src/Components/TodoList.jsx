import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({todoList}) {
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
      {todoList.map((item)=>{
        return <TodoItem key={item} todos={item}  />
      })}
        </tbody>
      </table>
    </div>
  );
}
