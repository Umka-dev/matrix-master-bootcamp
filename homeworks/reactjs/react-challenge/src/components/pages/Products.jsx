import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products] = useFetch('https://fakestoreapi.com/products');

  return (
    <>
      <div className='table-wrapper'>
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
                      <button>Delete</button>
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
