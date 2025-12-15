import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">E-Shop</div>
        <nav>
          <ul>
            <li>
              <NavLink 
                to="dashboard" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="orders" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="products" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="customers" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Customers
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="settings" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Outlet /> {/* Renders the selected Admin page */}
      </main>
    </div>
  );
};

export default AdminLayout;
