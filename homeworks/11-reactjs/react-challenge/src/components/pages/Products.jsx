import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
// import { deleteProduct } from '../../api/api';
import { Link } from 'react-router-dom';

const LOCAL_STORAGE_KEY = 'my_products_data';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [fetchedData] = useFetch('https://fakestoreapi.com/products');

  useEffect(() => {
    if (fetchedData) setProducts(fetchedData);
  }, [fetchedData]);

  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      setProducts(JSON.parse(storedData));
    } else if (fetchedData) {
      setProducts(fetchedData);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(fetchedData));
    }
  }, [fetchedData]);

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  console.log('products', products);

  return (
    <>
      <div className='page-layout'>
        <h1>Products</h1>
        {!products && <p>Product list is empty.</p>}
        {products ? (
          <table className='products-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>${product.price}</td>
                  <td>
                    <div className='actions-style'>
                      <Link to={`/products/show/${product.id}`}>Show</Link>|{' '}
                      <Link to={`/products/edit/${product.id}`}>Edit</Link>
                      <button onClick={() => handleDelete(product.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      <div className='add-link-style'>
        <Link to={`/products/new`}>Add Product</Link>
      </div>
    </>
  );
};

export default Products;
