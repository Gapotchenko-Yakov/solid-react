import "./App.css";
import TodosPage from "./SRP/TodosPage";
import { HomePage } from "./OCP/OCP";
import CustomButton from "./LSP/custom-button";

function App() {
  return (
    <CustomButton
      style={{
        fontSize: "3rem",
        padding: "0.5rem 2rem",
        borderRadius: "0.75rem",
      }}
    >
      Action
    </CustomButton>
  );
}

export default App;
