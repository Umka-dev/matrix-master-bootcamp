import React from 'react';
import Header from './components/layout/Header';
import AddPosts from './components/AddPosts';
import Footer from './components/layout/Footer';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <AddPosts />
      <Footer />
    </div>
  );
};
export default App;
