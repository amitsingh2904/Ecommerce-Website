import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import { ProductsContext } from "../Context/ProductsContext";
import { Link } from "react-router-dom";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const { products } = useContext(ProductsContext);

  const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

  if (!wishlistedProducts.length)
    return ( 
     <div className="go-back">
      <p className="empty-wishlist">Your wishlist is empty.</p>
    <Link  to="/home">Go Back </Link>
     </div>
  );

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      <div className="wishlist-grid">
        {wishlistedProducts.map(p => (
          <div key={p.id} className="wishlist-card">
            <Link to={`/products/${p.id}`} className="wishlist-link">
              <img src={p.thumbnail} alt={p.title} />
              <h3>{p.title}</h3>
              <p>${p.price}</p>
            </Link>
            <button className="remove-btn" onClick={() => toggleWishlist(p.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
