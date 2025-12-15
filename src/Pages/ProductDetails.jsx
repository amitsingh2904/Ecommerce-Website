import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import * as api from "../Api/ProductApi";
import "./ProductDetails.css";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
import {  FaHeart } from "react-icons/fa";


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
   const [selectedSize, setSelectedSize] = useState("");
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const isWishlisted = wishlist.includes(product?.id) // ✅ use context

useEffect(() => {
  api.getProductById(id)
    .then((product) => setProduct(product)) // ✅ use product directly
    .catch((err) => console.error("Failed to fetch product:", err));
}, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-container">
      {/* LEFT: Product Images */}
      <div className="product-images">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="main-image"
        />
        <div className="more-images">
          {product.images?.slice(0, 3).map((img, i) => (
            <img key={i} src={img} alt={`option-${i}`} />
          ))}
        </div>
         <button
           className={`wishlist ${isWishlisted ? "active" : ""}`}
           onClick={() => toggleWishlist(product.id)}
            >
          <FaHeart /> 
          </button>
          
      </div>

      {/* RIGHT: Product Details */}
      <div className="product-info">
        <h2 className="brand-name">{product.brand}</h2>
        <h3 className="product-title">{product.title}</h3>
        <div className="rating">
          ⭐ {product.rating} <span> | 4.7k Ratings</span>
        </div>

        <div className="price-section">
          <span className="current-price">${product.price}</span>
          <span className="old-price">${product.oldPrice || "1699"}</span>
          <span className="discount">(70% OFF)</span>
        </div>
        <p className="tax-info">inclusive of all taxes</p>

        {/* Size Options */}
         <div className="size-options">
      <h4>Select Size</h4>
      <div className="sizes">
        {product.sizes_available.map((size) => (
          <label
            key={size}
            className={`size-circle ${
              selectedSize === size ? "active" : ""
            }`}
          >
            <input
              type="radio"
              name="size"
              value={size}
              checked={selectedSize === size}
              onChange={() => setSelectedSize(size)}
            />
            <span>{size}</span>
          </label>
        ))}
      </div>
    </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button
            className="add-to-bag"
            disabled={!selectedSize}   // prevent adding without size
            onClick={() => addToCart({ ...product, selectedSize })}
          >
            🛍️ Add to Bag
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
