import React, { useState, useEffect } from "react";
import "./ProductModal.css";

const ProductModal = ({ product, onClose, onSave }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: "",
    rating: "",
    sizes_available: ""
  });

  useEffect(() => {
    if (product) {
      setForm({
        title: product.title || "",
        description: product.description || "",
        price: product.price || "",
        brand: product.brand || "",
        category: product.category || "",
        thumbnail: product.thumbnail || "",
        // images: product.images ? product.images.join(",") : "",
        rating: product.rating || "",
        sizes_available: product.sizes_available ? product.sizes_available.join(",") : ""
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      images: form.images ? form.images.split(",") : [],
      sizes_available: form.sizes_available ? form.sizes_available.split(",") : []
    };

    if (product) payload.id = product.id; // keep id for update
    onSave(payload);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{product ? "Update Product" : "Add Product"}</h2>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input name="title" value={form.title} onChange={handleChange} required />

          <label>Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} required />

          <label>Price</label>
          <input type="number" name="price" value={form.price} onChange={handleChange} required />

          <label>Brand</label>
          <input name="brand" value={form.brand} onChange={handleChange} required />

          <label>Category</label>
          <input name="category" value={form.category} onChange={handleChange} required />

          <label>Thumbnail URL</label>
          <input name="thumbnail" value={form.thumbnail} onChange={handleChange} />

          {/* <label>Images (comma separated URLs)</label>
          <input name="images" value={form.images} onChange={handleChange} /> */}

          <label>Rating</label>
          <input type="text" name="rating" value={form.rating} onChange={handleChange} />

          <label>Sizes Available (comma separated, e.g., S,M,L,XL,XXL)</label>
          <input name="sizes_available" value={form.sizes_available} onChange={handleChange} />

          <div className="modal-actions">
            <button type="submit" className="save-btn">{product ? "Update" : "Add"}</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
