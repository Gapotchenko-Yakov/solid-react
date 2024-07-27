import "./App.css";

import DisplayUser from "./ISP/DisplayUser";

function App() {
  const user = {
    name: "John",
    age: 27,
    hairColor: "blonde",
    heightInCm: 175,
  };
  return <DisplayUser user={user} />;
}

export default App;
