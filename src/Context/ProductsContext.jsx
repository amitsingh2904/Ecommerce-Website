// src/Context/ProductsContext.jsx
import React, { createContext, useState, useEffect } from "react";
import * as api from "../Api/ProductApi";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  api.getProducts(30, 0)
    .then(data => {
      // data is already the array from axios/json-server
      setProducts(data);
      setLoading(false);
    })
    .catch(err => {
      console.error("Products API error:", err);
      setLoading(false);
    });
}, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};
