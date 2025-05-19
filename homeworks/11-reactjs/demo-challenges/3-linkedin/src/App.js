import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthPage from './components/pages/AuthPage';
import Members from './components/pages/Members';
import Profile from './components/pages/Profile';
import Logout from './components/auth/Logout';
import NotFound from './components/pages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<AuthPage />} />
          <Route path='/members' element={<Members />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/logout' element={<Logout />} />

          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
