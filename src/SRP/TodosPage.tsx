import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { useTodos } from "./custom-hooks";

const TodosPage = () => {
  const todos = useTodos();

  return (
    <article>
      <h1>My Todos:</h1>
      <TodoList todos={todos} />
    </article>
  );
};

export default TodosPage;
