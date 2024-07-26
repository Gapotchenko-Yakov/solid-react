import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodosPage from "./SRP/TodosPage";

function App() {
  const [count, setCount] = useState(0);

  return <TodosPage />;
}

export default App;
