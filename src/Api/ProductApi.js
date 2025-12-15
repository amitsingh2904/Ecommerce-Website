import axios from "axios";

const BASE = "http://localhost:3000/products"; // json-server backend

// Fetch all products with optional limit & skip
export const getProducts = async (limit = 100, skip = 0) => {
  const res = await axios.get(BASE, {
    params: { _limit: limit, _start: skip }
  });
  return res.data; // array
};

export const getProductById = async (id) => {
  const res = await axios.get(`${BASE}/${id}`);
  return res.data; // single object
};

export const createProduct = async (payload) => {
  const res = await axios.post(BASE, payload);
  return res.data;
};

export const updateProduct = async (id, payload) => {
  const res = await axios.put(`${BASE}/${id}`, payload);
  return res.data;
};

export const deleteProduct = async (id) => {
  await axios.delete(`${BASE}/${id}`);
  return id; // just return deleted id
};

export const searchProducts = async (q) => {
  const res = await axios.get(BASE, { params: { q } });
  return res.data; // array
};

