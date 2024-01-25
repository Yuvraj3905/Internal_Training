import React from "react";
import Title from "./Components/Title";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

export default function App() {
  const todolist=[{
    index:1,
    name:"Computer",
    desc:"Computers bloody",
  },
  {
    index:2,
    name:"Computer",
    desc:"Computers bloody",
  },
  {
    index:3,
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
