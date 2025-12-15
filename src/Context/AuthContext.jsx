// src/context/AuthContext.jsx
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState("user"); // "user" or "admin"
  return <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>;
};
