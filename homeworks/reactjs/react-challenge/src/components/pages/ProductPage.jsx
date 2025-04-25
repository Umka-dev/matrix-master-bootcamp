import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link, useParams } from 'react-router-dom';

const ProductPage = () => {
  const params = useParams();
  const [product] = useFetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );

  return (
    <div className='page-layout'>
      {product ? (
        <div>
          <h1>{product.title}</h1>

          <div className='two-column-flex'>
            <p>Name:</p>
            <p>{product.title}</p>
          </div>
          <div className='two-column-flex'>
            <p>Price:</p>
            <p>${product.price}</p>
          </div>
          <div className='two-column-flex'>
            <p>Description:</p>
            <p>{product.description}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className='actions-style margin-top'>
        <Link to={`/products`}>Back</Link>|{' '}
        <Link to={`/products/edit/${params.productId}`}>Edit</Link>
      </div>
    </div>
  );
};
export default ProductPage;
