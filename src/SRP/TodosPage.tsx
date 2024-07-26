import axios from "axios";
import React, { useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TodosPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const { data } = response;
      setTodos(data);
    };

    getTodos();
  }, []);

  return (
    <article>
      <h1>My Todos:</h1>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>{`ID: ${todo.id}, Title: ${todo.title}`}</li>
        ))}
      </ul>
    </article>
  );
};

export default TodosPage;
