import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header-style'>
      <h4>Welcome, username!</h4>
      <nav className='navigation'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
    </header>
  );
}
