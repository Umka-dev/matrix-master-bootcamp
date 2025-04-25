import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const LOCAL_STORAGE_KEY = 'my_products_data';

const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Get from local storage
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
