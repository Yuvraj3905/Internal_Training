import React from "react";
import Title from "./Components/Title";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

export default function App() {
  const todolist=[{
    name:"Computer",
    desc:"Computers bloody",
  },
  {
    name:"Computer",
    desc:"Computers bloody",
  },
  {
    name:"Computer",
    desc:"Computers bloody",
  }]
  return (
    <>
      <div className="shadow p-3 mb-5  rounded bg-primary-subtle container">
        <center>
          <Title />
          <AddTodo />
          <TodoList todoList={todolist}/>
        </center>
      </div>
    </>
  );
}
