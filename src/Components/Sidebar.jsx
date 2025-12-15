// src/Components/Sidebar.jsx
import React, { useContext, useState, useEffect } from "react";
import { FilterContext } from "../Context/FilterContext";
import { ProductsContext } from "../Context/ProductsContext";
import "./Sidebar.css";

const Sidebar = () => {
  const { filters, update, clearFilter, clearAll } = useContext(FilterContext);
  const { products } = useContext(ProductsContext);
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const brands = [...new Set(products.map(p => p.brand))];
  const categories = [...new Set(products.map(p => p.category))];

  useEffect(() => {
    update({ priceRange });
  }, [priceRange]);

  return (
    <aside className="sidebar">
      <div className="sidebar-part1">
        <h5>Filters</h5>
        <button className="clear" onClick={clearAll}>Clear All</button>
      </div>
      <hr />

      {/* Price */}
      <div className="price-filter">
        <h4>Price</h4>
        <input
          type="range"
          min="0"
          max="5000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
        />
        <div>${priceRange[0]} - ${priceRange[1]}+</div>
      </div>
      <hr />

      {/* Brands */}
      <div className="brand">
        <h4>Brand</h4>
        {brands.map((b, idx) => (
          <label key={idx}>
            <input
              type="checkbox"
              checked={filters.brand.includes(b)}
              onChange={(e) =>
                e.target.checked
                  ? update({ brand: [...filters.brand, b] })
                  : clearFilter("brand", b)
              }
            />
            {b}
          </label>
        ))}
      </div>
      <hr />

      {/* Categories */}
      <div className="brand">
        <h4>Category</h4>
        {categories.map((c, idx) => (
          <label key={idx}>
            <input
              type="checkbox"
              checked={filters.category.includes(c)}
              onChange={(e) =>
                e.target.checked
                  ? update({ category: [...filters.category, c] })
                  : clearFilter("category", c)
              }
            />
            {c}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
