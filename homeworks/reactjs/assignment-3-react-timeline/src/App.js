import React from 'react';
import Header from './components/layout/Header';
import AddPostForm from './components/AddPostForm';
import Footer from './components/layout/Footer';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <AddPostForm />
      <Footer />
    </div>
  );
};
export default App;
