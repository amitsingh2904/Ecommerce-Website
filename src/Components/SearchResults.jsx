import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as api from "../Api/ProductApi";
import ProductCard from "./ProductCard";
import "./ProductCard.css";

const SearchResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("query") || "";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setLoading(true);
      api.searchProducts(query).then((res) => {
        setProducts(res.data.products || []);
        setLoading(false);
      });
    }
  }, [query]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {products.length > 0 ? (
        products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default SearchResults;
