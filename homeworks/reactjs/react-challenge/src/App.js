import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Homepage from './components/pages/Homepage';
import NotFound from './components/pages/NotFound';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main className='content'>
          <Routes>
            <Route path='/' element={<Homepage />} />

            <Route path='/*' element={<NotFound />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
