// src/pages/AdminPanel.jsx
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

import { useNavigate } from "react-router-dom";
import AdminTable from "../Components/AdminTable";

const AdminPanel = () => {
  const { role } = useContext(AuthContext);
  const nav = useNavigate();
  if (role !== "admin") {
    return (
      <div className="centered">
        <p>Access denied. Please login as admin.</p>
        <button onClick={() => nav("/login")}>Go to Login</button>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <AdminTable />
    </div>
  );
};

export default AdminPanel;
