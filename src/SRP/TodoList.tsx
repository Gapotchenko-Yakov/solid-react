import React from "react";
import { Todo } from "./types";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <ul>
      {todos.map
        ? todos.map((todo: Todo) => (
            <li key={todo.id}>{`ID: ${todo.id}, Title: ${todo.title}`}</li>
          ))
        : null}
    </ul>
  );
};

export default TodoList;
