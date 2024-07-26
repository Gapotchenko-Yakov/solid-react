import React from "react";
import { Todo, Todos } from "./types";

const TodoList = (todos: any) => {
  return (
    <ul>
      {(todos || [])?.map((todo: any) => (
        <li key={todo.id}>{`ID: ${todo.id}, Title: ${todo.title}`}</li>
      ))}
    </ul>
  );
};

export default TodoList;
