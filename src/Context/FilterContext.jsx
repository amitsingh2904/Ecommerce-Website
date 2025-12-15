import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: [],  // single category
    brand: [],       // multi-select
    gender: null,
    priceRange: null,
    search: ""
  });

  const update = (patch) => setFilters((p) => ({ ...p, ...patch }));

  const clearFilter = (key, value) => {
    if (!value) {
      setFilters((p) => ({ ...p, [key]: Array.isArray(p[key]) ? [] : null }));
    } else {
      setFilters((p) => ({
        ...p,
        [key]: Array.isArray(p[key]) ? p[key].filter((v) => v !== value) : null
      }));
    }
  };

  const clearAll = () => {
    setFilters({
      category: [],
      brand: [],
      gender: null,
      priceRange: null,
      search: ""
    });
  };

  return (
    <FilterContext.Provider value={{ filters, update, clearFilter, clearAll }}>
      {children}
    </FilterContext.Provider>
  );
};
