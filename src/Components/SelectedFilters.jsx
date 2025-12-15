// src/components/SelectedFilters.jsx
import React, { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";
import "./SelectedFilters.css";

const SelectedFilters = () => {
  const { filters, clearFilter, update } = useContext(FilterContext);

  const hasFilters =
    filters.brand.length > 0 || filters.category || filters.search;

  if (!hasFilters) return null;

  return (
    <div className="selected-filters">
      {/* Brand tags */}
      {filters.brand.map((b, idx) => (
        <span key={idx} className="filter-tag">
          {b} <button onClick={() => clearFilter("brand", b)}>✕</button>
        </span>
      ))}


      {filters.category.map((c, idx) => (
        <span key={idx} className="filter-tag">
          {c} <button onClick={() => clearFilter("category", c)}>✕</button>
        </span>
      ))}

      {/* Category tag */}
      {/* {filters.category && (
        <span className="filter-tag">
          {filters.category}{" "}
          <button onClick={() => clearFilter("category")}>✕</button>
        </span>
      )} */}

      {/* Search tag */}
      {filters.search && (
        <span className="filter-tag">
          Search: {filters.search}{" "}
          <button onClick={() => update({ search: "" })}>✕</button>
        </span>
      )}

      {/* Clear All button */}
      {/* <button className="clear-all" onClick={() => {
        update({ category: [], brand: [], search: "" });
      }}>
        Clear All
      </button> */}
    </div>
  );
};

export default SelectedFilters;
