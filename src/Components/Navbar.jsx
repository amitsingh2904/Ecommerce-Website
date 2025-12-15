import React, { useState , useContext } from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";
import "./Navbar.css";
import { useNavigate , Link} from "react-router-dom";
import { WishlistContext } from "../Context/WishlistContext";


const Navbar = () => {
  const { wishlist } = useContext(WishlistContext);
  const { cart } = useContext(CartContext);
  const [query, setQuery] = useState(""); 
  const navigate = useNavigate();


  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      // Redirect to search results page with query as parameter
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-icon">E</span>
        <span className="logo-text">commerce</span>
      </div>

      {/* Search Bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        <select className="search-select">
          <option>All categories</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Home</option>
        </select>
        <input
          type="text"
          placeholder="I'm shopping for..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn" type="submit">
          <FaSearch />
        </button>
      </form>

      {/* Right Section */}
      <div className="right-section">
        <div className="help">
          <FaPhoneAlt className="help-icon" />
          <div>
            <p className="help-title">Need Help?</p>
            <p className="help-phone">+001 123 456 789</p>
          </div>
        </div>

        <div className="icons">
          <FaUser className="icon" />
          <div className="icon-badge">
            <Link to="/wishlist">
            <FaHeart />
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
            </Link>
          </div>
          <div className="icon-badge">
            <Link to="/cart">
            <FaShoppingCart />
              {cart.length > 0 && <span className="badge">{cart.length}</span>}
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
