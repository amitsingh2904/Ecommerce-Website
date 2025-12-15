import React, { useEffect, useState } from "react";
import * as api from "../Api/ProductApi";
import ProductModal from "./ProductModal";
import "./AdminTable.css";

const AdminTable = () => {
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  // Load products from JSON-server
  useEffect(() => {
    api.getProducts(100, 0)
      .then((res) => setProducts(res))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  // Delete product
  const handleDelete = (id) => {
    if (!window.confirm("Delete this product?")) return;

    api.deleteProduct(id)
      .then(() => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
        alert("✅ Product deleted");
      })
      .catch(() => alert("❌ Failed to delete product"));
  };

  // Add / Update product
  const handleSave = (data, isNew) => {
    if (isNew) {
      api.createProduct(data)
        .then((res) => {
          setProducts((prev) => [res, ...prev]); // add new product to top
          alert("✅ Product added");
        })
        .catch(() => alert("❌ Failed to add product"));
    } else {
      api.updateProduct(data.id, data)
        .then((res) => {
          setProducts((prev) =>
            prev.map((p) => (p.id === res.id ? res : p))
          );
          alert("✅ Product updated");
        })
        .catch(() => alert("❌ Failed to update product"));
    }

    setEdit(null);
    setShowAdd(false);
  };

  return (
    <div>
      <div className="admin-header">
        <h3>Admin - Products</h3>
        <button onClick={() => setShowAdd(true)}>Add Product</button>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>
                <img src={p.thumbnail || p.images?.[0]} alt="" width="60" />
              </td>
              <td>{p.title}</td>
              <td>${p.price}</td>
              <td>
                <button onClick={() => setEdit(p)}>Update</button>
                <button onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {(edit || showAdd) && (
        <ProductModal
          product={edit}
          onClose={() => { setEdit(null); setShowAdd(false); }}
          onSave={(data) => handleSave(data, !!showAdd)}
        />
      )}
    </div>
  );
};

export default AdminTable;
