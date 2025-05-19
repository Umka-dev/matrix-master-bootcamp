import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  // Handle form input change
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    // console.log(name, ': ', value);
    setLoginData((prevData) => ({ ...prevData, [name]: value.trim() }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const members = JSON.parse(localStorage.getItem('members')) || [];
    // console.log('loginData: ', loginData);
    // console.log('email: ', loginData.email);
    // console.log('members: ', members);
    if (!members.length) {
      setError('The user list is empty. Please, register first.');
      return;
    }

    const foundUser = members.find((user) => user.email === loginData.email);

    if (foundUser && foundUser.password === loginData.password) {
      // console.log('Login successful!');
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      navigate('/members');
    } else {
      setError('Email or password is not correct!');
    }
  };

  return (
    <div className='column-box'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleLogin}>
        <input
          type='email'
          name='email'
          value={loginData.email}
          onChange={handleChangeInput}
          placeholder='Your email...'
          required
        />
        <input
          type='password'
          name='password'
          value={loginData.password}
          onChange={handleChangeInput}
          placeholder='Your password...'
          required
        />
        <button type='submit'>Login</button>
        {error && <p className='error-msg'>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
