import React from 'react';
import RegisterForm from '../auth/RegisterForm';
import LoginForm from '../auth/LoginForm';

const AuthPage = () => {
  return (
    <div className='auth-page'>
      <h1>
        Welcome to LinkedIn! <br /> A social network for professionals.
      </h1>
      <div className='row-box'>
        <RegisterForm />
        <LoginForm />
      </div>
    </div>
  );
};

export default AuthPage;
