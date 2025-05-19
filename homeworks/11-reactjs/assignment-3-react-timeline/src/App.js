import React from 'react';
import Header from './components/layout/Header';
import PostsContainer from './components/PostsContainer';
import Footer from './components/layout/Footer';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <PostsContainer />
      <Footer />
    </div>
  );
};
export default App;
