import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Feed from './components/pages/Feed';
import LoginPage from './components/pages/LoginPage';
import NotFound from './components/pages/NotFound';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Navigate to='/feed' replace />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/login' element={<LoginPage />} />

          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
