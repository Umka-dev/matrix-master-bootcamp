import React, { useState, useEffect } from 'react';

const RegisterForm = () => {
  const [userInfo, setUserInfo] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    jobTitle: '',
  });
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const savedUsers = localStorage.getItem('members');
    if (savedUsers) {
      setUserList(JSON.parse(savedUsers));
    }
  }, []);

  // Handle form input change
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    // console.log(name, ': ', value);
    setUserInfo((prevData) => ({ ...prevData, [name]: value.trim() }));
  };

  // Handle submit the registration form
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    // console.log('userInfo: ', userInfo);
    const userExists = userList.some((user) => user.email === userInfo.email);
    if (userExists) {
      setError('This user already exist. Try to login.');
      setUserInfo({
        id: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        jobTitle: '',
      });
      return;
    }

    if (userInfo.password === userInfo.confirmPassword && !userExists) {
      const newUser = {
        id: Date.now(),
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
        jobTitle: userInfo.jobTitle,
      };

      // console.log('newUser: ', newUser);
      setUserList((users) => [...users, newUser]);
      setUserInfo({
        id: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        jobTitle: '',
      });
      setSuccess('Registration was successful. You can log in.');
    } else {
      setError(
        'Passwords do not match. Please try again.',
        userInfo.password,
        ': ',
        userInfo.confirmPassword
      );
      return;
    }
  };

  // console.log('userList: ', userList);

  useEffect(() => {
    // Save users to Local Storage
    localStorage.setItem('members', JSON.stringify(userList));
  }, [userList]);

  return (
    <div className='column-box'>
      <h2>Register</h2>
      <form className='register-form' onSubmit={handleRegisterSubmit}>
        <input
          type='text'
          name='name'
          value={userInfo.name}
          onChange={handleChangeInput}
          placeholder='Name...'
          minLength={2}
          maxLength={30}
          required
        />
        <input
          type='email'
          name='email'
          value={userInfo.email}
          onChange={handleChangeInput}
          placeholder='Email...'
          minLength={7}
          maxLength={25}
          required
        />
        <input
          type='password'
          name='password'
          value={userInfo.password}
          onChange={handleChangeInput}
          placeholder='Password...'
          minLength={4}
          maxLength={12}
          required
        />
        <input
          type='password'
          name='confirmPassword'
          value={userInfo.confirmPassword}
          onChange={handleChangeInput}
          placeholder='Confirm password...'
          minLength={4}
          maxLength={12}
          required
        />
        <input
          type='text'
          name='jobTitle'
          value={userInfo.jobTitle}
          onChange={handleChangeInput}
          placeholder='Job title...'
          minLength={2}
          maxLength={30}
        />
        <button type='submit'>Register</button>
        {error && <p className='error-msg'>{error}</p>}
        {success && <p className='success-msg'>{success}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
