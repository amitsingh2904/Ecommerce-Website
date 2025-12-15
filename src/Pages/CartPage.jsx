// src/Pages/CartPage.jsx
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./CartPage.css"; // optional styling

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
      <h2 style={{ textAlign: "center" }}>Your cart is empty 🛒</h2>
      <Link  to="/home">Go Back </Link>
      </div>
    
  ) ;

  }

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <button className="clear-btn" onClick={clearCart}>
        Clear Cart
      </button>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>${item.price} × {item.qty}</p>
              <p><b>Size:</b> {item.selectedSize}</p>
              <p><b>Total:</b> ${item.price * item.qty}</p>
            </div>
            <button className="remove" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
