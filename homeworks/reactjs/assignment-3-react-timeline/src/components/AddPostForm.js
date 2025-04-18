import axios from 'axios';
import React, { useState } from 'react';

const AddPostForm = ({ onUpdatedPostList }) => {
  const [userInput, setUserInput] = useState({ message: '' });

  const UNREG_USER_ID = '680228d4ea4c0d0dec163674';

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      user: UNREG_USER_ID,
      message: userInput.message,
    };
    axios
      .post('http://localhost:3300/api/post', requestBody)
      .then((res) => {
        const newPost = {
          userName: 'Unregistered User',
          message: res.data.message,
          date: new Date(res.data.createdAt).toLocaleDateString(),
        };
        onUpdatedPostList((prev) => [newPost, ...prev]); // Add user inputted data to the fetched post list
        setUserInput({ message: '' });
      })
      .catch((err) => console.log('Error posting message:', err));
  };

  return (
    <div>
      <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='post'>Post a message</label>
        <textarea
          type='text'
          name='message'
          value={userInput.message}
          onChange={handleChange}
          placeholder='Input your message...'
          required
        ></textarea>
        <button type='submit'>Post a message</button>
      </form>
    </div>
  );
};
export default AddPostForm;
