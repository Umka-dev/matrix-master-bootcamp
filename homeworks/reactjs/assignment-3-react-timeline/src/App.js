import React from 'react';
import Header from './components/layout/Header';
import Posts from './components/Posts';
import Footer from './components/layout/Footer';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Posts />
      <Footer />
    </div>
  );
};
export default App;
