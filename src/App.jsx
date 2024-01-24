import React from "react";
import Title from "./Components/Title";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/ToDoList";

export default function App() {
  return (
    <>
      <div className="shadow p-3 mb-5  rounded  bg-white container">
        <center>
          <Title />
          <AddTodo />
          <TodoList />
        </center>
      </div>
    </>
  );
}
