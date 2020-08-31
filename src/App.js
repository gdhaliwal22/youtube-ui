import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__pge">
        <h1>I am Sidebar</h1>
      </div>

      <Sidebar />
      {/* Recommended Video */}
    </div>
  );
}

export default App;
