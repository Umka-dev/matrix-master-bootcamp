import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Products from './components/pages/Products';
import AddNewProduct from './components/pages/AddNewProduct';
import ProductPage from './components/pages/ProductPage';
import EditProduct from './components/pages/EditProduct';
import NotFound from './components/pages/NotFound';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main className='content'>
          <Routes>
            <Route path='/' element={<Navigate to='/products' replace />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/new' element={<AddNewProduct />} />
            <Route path='/products/show/:productId' element={<ProductPage />} />
            <Route path='/products/edit/:productId' element={<EditProduct />} />

            <Route path='/*' element={<NotFound />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
