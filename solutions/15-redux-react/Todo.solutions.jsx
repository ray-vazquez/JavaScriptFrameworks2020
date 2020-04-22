import React, { Component, useState } from "react";
import ListItem from "./ListItem/ListItem";

function Todo(props) {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(userInput);
    setUserInput("");
  };
  return (
    <div className="mt-4">
      <h1 className="h3">Todo List</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter text"
            aria-label="Enter text"
            aria-describedby="button-add"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="subimit" id="button-add">
              Add
            </button>
          </div>
        </div>
      </form>
      <ul className="list-group">
        {/* The todos will be passed down as props */}
        {props.todos.map((text, index) => {
          const key = `todo-item-${index}`;
          return (
            <ListItem deleteTodo={props.deleteTodo} todoIndex={index} key={key}>
              {text}
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
