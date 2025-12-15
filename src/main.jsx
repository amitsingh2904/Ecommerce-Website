// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import AdminPanel from "./Pages/AdminPanel";
import Login from "./Pages/Login";
import { AuthProvider } from "./Context/AuthContext";
import { FilterProvider } from "./Context/FilterContext";
import { CartProvider } from "./Context/CartContext";   // ✅ Import CartProvider
import ProductDetails from "./Pages/ProductDetails";
import SearchResults from "./Components/SearchResults";
import CartPage from "./Pages/CartPage";
import { WishlistProvider } from "./Context/WishlistContext";
import Wishlist from "./Pages/Wishlist";
import { ProductsProvider } from "./Context/ProductsContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // shared layout (Navbar, Sidebar, etc.)
    children: [
      { index: true, element: <Login /> }, 
      { path: "/home", element: <Home /> },
      { path: "/login", element: <Login /> },

      
      
      { path: "/admin", element: <AdminPanel /> },
      { path: "products/:id", element: <ProductDetails /> },
      { path: "/search", element: <SearchResults /> },
       { path: "/cart", element: <CartPage /> },
       { path: "/wishlist", element: <Wishlist /> },
       { path: "*", element: <Home /> }, // fallback
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProductsProvider>
    <FilterProvider>
      
        <WishlistProvider>
         <CartProvider>   
          <RouterProvider router={router} />
         </CartProvider>
       </WishlistProvider>
      
    </FilterProvider>
  </ProductsProvider>
  </AuthProvider>
);
