import "./App.css";

import DisplayUser from "./ISP/DisplayUser";

function App() {
  const user = {
    personalInfo: {
      name: "John",
      age: 27,
    },
    physicalFeatures: {
      hairColor: "blonde",
      heightInCm: 175,
    },
  };
  return <DisplayUser name={user.personalInfo.name} />;
}

export default App;
