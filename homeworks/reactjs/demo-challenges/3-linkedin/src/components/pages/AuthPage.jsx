import React from 'react';

const AuthPage = () => {
  return (
    <div className='auth-page'>
      <h1>
        Welcome to LinkedIn! <br /> A social network for professionals.
      </h1>
      <div className='row-box'>
        <div className='column-box'>
          <h2>Register</h2>
          <form className='register-form'>
            <input type='text' name='name' placeholder='Name...' required />
            <input type='email' name='email' placeholder='Email...' required />
            <input
              type='password'
              name='password'
              placeholder='Password...'
              required
            />
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm password...'
              required
            />
            <input type='text' name='jobTitle' placeholder='Job title...' />
            <button type='submit'>Register</button>
          </form>
        </div>
        <div className='column-box'>
          <h2>Login</h2>
          <form className='login-form'>
            <input
              type='email'
              name='email'
              placeholder='Your email...'
              required
            />
            <input
              type='password'
              name='password'
              placeholder='Your password...'
              required
            />
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
