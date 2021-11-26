import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Instafeed from "./instafeed";
function App() {
  var feed = new Instafeed();
  return (
    <div className="App">
      <div id="instagram"></div>
      <div id="instafeed"></div>
    </div>
  );
}

export default App;
