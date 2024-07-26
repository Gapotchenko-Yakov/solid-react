import axios from "axios";
import { useEffect, useState } from "react";
import { Todo, Todos } from "./types";

const getTodos = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  const { data } = response;
  return data;
};

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  return todos;
};

export { useTodos };
