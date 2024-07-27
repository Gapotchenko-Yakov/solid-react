import axios from "axios";
import "./App.css";
import LoginForm from "./DIP/LoginForm";

function App() {
  return <LoginForm onSubmit={(formData) => axios.post("someurl", formData)} />;
}

export default App;
