import React from "react";

import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Solutions from "./components/Solutions";


const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <Welcome/>
      <Solutions/>
    </div>
  );
};

export default App;