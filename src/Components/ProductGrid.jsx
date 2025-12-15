import React, { useContext, useState } from "react";
import { FilterContext } from "../Context/FilterContext";
import { ProductsContext } from "../Context/ProductsContext";
import SelectedFilters from "./SelectedFilters";
import ProductCard from "./ProductCard";
import "./Pagination.css";

const ProductGrid = () => {
  const { products, loading } = useContext(ProductsContext);
  const { filters } = useContext(FilterContext);
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const toggleWishlist = (id) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filtered = products.filter(p => {
    if (filters.brand.length && !filters.brand.includes(p.brand)) return false;
    if (filters.category.length && !filters.category.includes(p.category)) return false;
    if (filters.search && !p.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
    if (filters.priceRange && (p.price < filters.priceRange[0] || p.price > filters.priceRange[1])) return false;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);

  const getPageNumbers = (current, total, maxVisible = 5) => {
    let pages = [];
    if (total <= maxVisible) {
      pages = Array.from({ length: total }, (_, i) => i + 1);
    } else {
      let start = Math.max(current - 2, 1);
      let end = Math.min(start + maxVisible - 1, total);
      if (end - start + 1 < maxVisible) start = Math.max(end - maxVisible + 1, 1);
      pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
      if (start > 1) pages.unshift("...");
      if (end < total) pages.push("...");
    }
    return pages;
  };

  if (loading) return <div>Loading products...</div>;
  if (!filtered.length) return <div>No products match filters</div>;

  return (
    <>
      <SelectedFilters />
      <div className="product-grid">
        {currentProducts.map(p => (
          <ProductCard
            key={p.id}
            p={p}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
          />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {getPageNumbers(currentPage, totalPages).map((page, idx) =>
          page === "..." ? (
            <span key={idx} className="dots">...</span>
          ) : (
            <button
              key={idx}
              className={currentPage === page ? "active" : ""}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ProductGrid;
