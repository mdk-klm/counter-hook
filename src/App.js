import React from "react";
import "./styles.css";
import Title from "./Title";
import Counter from "./Counter";

const App = () => {
  return (
    <div className="App">
      <Title title="Check this COUNT" />
      <Counter />
    </div>
  );
};

export default App;
