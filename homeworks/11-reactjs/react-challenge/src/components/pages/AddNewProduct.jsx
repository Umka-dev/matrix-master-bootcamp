import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LOCAL_STORAGE_KEY = 'my_products_data';

const AddNewProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title: formData.title,
      price: parseFloat(formData.price),
      description: formData.description,
      category: formData.category || 'default',
      image: formData.image || 'https://via.placeholder.com/150',
    };

    // Get products from the localStorage
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    const products = stored ? JSON.parse(stored) : [];

    // Add new product
    const updatedProducts = [...products, newProduct];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedProducts));

    // Back to product list
    navigate('/products');
  };

  // console.log('formData: ', formData);

  return (
    <div className='page-layout'>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit} className='add-product-form'>
        <label htmlFor='title'>Name:</label>
        <input
          name='title'
          value={formData.title}
          onChange={handleChange}
          placeholder='Input product name...'
          minLength={4}
          maxLength={30}
          required
        />
        <label htmlFor='price'>Price:</label>
        <input
          name='price'
          value={formData.price}
          onChange={handleChange}
          placeholder='Input price...'
          minLength={1}
          maxLength={10}
          required
        />
        <label htmlFor='description'>Description:</label>
        <textarea
          name='description'
          value={formData.description}
          onChange={handleChange}
          placeholder='Input description...'
          maxLength={200}
          required
        />
        <button type='submit'>Create</button>
      </form>
      <div className='actions-style margin-top'>
        <Link to={`/products`}>Back</Link>
      </div>
    </div>
  );
};
export default AddNewProduct;
