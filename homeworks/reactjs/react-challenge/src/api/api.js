import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

// CREATE — POST
export const createProduct = async (productData) => {
  const response = await axios.post(API_URL, productData);
  return response.data;
};

// UPDATE — PUT
export const updateProduct = async (productId, productData) => {
  const response = await axios.put(`${API_URL}/${productId}`, productData);
  return response.data;
};

// DELETE — DELETE
export const deleteProduct = async (productId) => {
  const response = await axios.delete(`${API_URL}/${productId}`);
  return response.data;
};
