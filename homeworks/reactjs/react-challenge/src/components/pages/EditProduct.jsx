import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

const LOCAL_STORAGE_KEY = 'my_products_data';

const EditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    // Get data from local storage
    const storedProducts =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    const localProduct = storedProducts.find(
      (product) => product.id === parseInt(params.productId)
    );

    if (localProduct) {
      setProduct(localProduct);
    } else {
      console.log('Failed to fetch product');
    }
  }, [params.productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get all products from local storage
    const storedProducts =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

    // Find and update product
    const updatedProducts = storedProducts.map((p) =>
      p.id === parseInt(params.productId)
        ? {
            ...p, // spread old product data
            title: product.title, // update with new title
            price: product.price, // update with new price
            description: product.description, // update with new description
          }
        : p
    );

    // Save updated products to localStorage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedProducts));

    // Navigate back to the product page
    navigate(`/products/show/${params.productId}`);
  };

  return (
    <div className='page-layout'>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit} className='edit-product-form'>
        <label htmlFor='title'>Name:</label>
        <input
          name='title'
          value={product.title}
          onChange={handleChange}
          placeholder='Product Name'
          required
        />
        <label htmlFor='price'>Price:</label>
        <input
          name='price'
          value={product.price}
          onChange={handleChange}
          placeholder='Product Price'
          required
          type='number'
        />
        <label htmlFor='description'>Description:</label>
        <textarea
          name='description'
          value={product.description}
          onChange={handleChange}
          placeholder='Product Description'
          required
        />
        <button type='submit'>Save Changes</button>
      </form>
      <div className='actions-style margin-top'>
        <Link to={`/products/show/${params.productId}`}>Back</Link>
      </div>
    </div>
  );
};

export default EditProduct;
