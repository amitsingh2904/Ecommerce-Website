// src/components/ProductCard.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { FaStar, FaHeart } from "react-icons/fa";
import { WishlistContext } from "../Context/WishlistContext"; // ✅ import context

const ProductCard = ({ p }) => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext); // ✅ use context
  const isWishlisted = wishlist.includes(p.id);

  return (
    <div className="product-Container">
      <Link to={`/products/${p.id}`} className="product-link">
        <div className="product-card">
          <img src={p.thumbnail} alt={p.title} />
          <div className="rate">
            {p.rating} <FaStar className="star-icon" />
          </div>
          <h3>{p.title}</h3>
          <p>{p.brand}</p>
          <p>{p.category}</p>
          <h4>${p.price}</h4>
        </div>
      </Link>

      <div className="wish">
        <button
          className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
          onClick={() => toggleWishlist(p.id)}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
