// src/App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <main style={{ flex: 1, padding: "20px" }}>
          {/* Renders child routes */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
