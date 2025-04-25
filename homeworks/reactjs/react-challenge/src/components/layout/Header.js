import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header-style'>
      <nav className='navigation'>
        <Link to='/products'>Products</Link>
        <Link to='/products/new'>Add Product</Link>
      </nav>
    </header>
  );
}
