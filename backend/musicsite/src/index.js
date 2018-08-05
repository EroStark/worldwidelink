import React from "react";
import ReactDOM from "react-dom";
import Content from "./content"

import "./styles.css";

function App() {
  return (
    <div className="App">
        <div className="earth" />
        <Content />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
