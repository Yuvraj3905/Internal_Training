import React from "react";
import TodoItem from "./TodoItem";
import TodoItem2 from "./TodoItem2";

export default function TodoList() {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col-2">S.NO</th>
            <th scope="col-4">Title</th>
            <th scope="col-6">Description</th>
          </tr>
        </thead>
        <tbody>
      <TodoItem />
        </tbody>
      </table>
    </div>
  );
}
