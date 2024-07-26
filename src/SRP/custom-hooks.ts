import axios from "axios";
import { useEffect, useState } from "react";
import { Todo } from "./types";

const getTodos = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  const { data } = response;
  return data;
};

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos().then((data) => setTodos(data));
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //   .then((res) => setTodos(res.data))
    //   .catch((err) => console.log(err));
  }, []);

  return todos;
};

export { useTodos };
