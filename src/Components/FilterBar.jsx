// src/components/FilterBar.jsx
import React, { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";

const FilterBar = () => {
  const { filters, clearFilter, update } = useContext(FilterContext);

  return (
    <div className="filter-bar">
      {filters.brand.map((b) => (
        <span key={b} className="chip">
          {b} <button onClick={() => clearFilter("brand", b)}>✕</button>
        </span>
      ))}

      {filters.category && (
        <span className="chip">
          {filters.category} <button onClick={() => update({ category: null })}>✕</button>
        </span>
      )}

      {filters.search && (
        <span className="chip">
          Search: {filters.search} <button onClick={() => update({ search: "" })}>✕</button>
        </span>
      )}

      {(filters.brand.length || filters.category || filters.search) && (
        <button className="clear-all" onClick={() => update({ brand: [], category: null, search: "" })}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default FilterBar;
