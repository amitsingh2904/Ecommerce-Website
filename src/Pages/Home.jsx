// src/pages/Home.jsx
import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import ProductGrid from "../Components/ProductGrid";

const Home = () => {
  const [options, setOptions] = useState({ brands: [], categories: [] });

  return (
    <div className="home" style={{ display: "flex" }}>
      {/* Sidebar gets the options */}
      <Sidebar options={options} />

      {/* ProductGrid sends options back to parent */}
      <div style={{ flex: 1 }}>
        <ProductGrid onOptionsReady={setOptions} />
      </div>
    </div>
  );
};

export default Home;
