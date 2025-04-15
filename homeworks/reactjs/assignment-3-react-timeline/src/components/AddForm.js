import React, { useState } from 'react';

const AddForm = ({ onUpdatedPostList }) => {
  const [userInput, setUserInput] = useState({ userName: '', message: '' });

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
    const newPost = {
      ...userInput,
      date: new Date().toLocaleDateString(),
    };
    onUpdatedPostList((prev) => [newPost, ...prev]); // Add user inputted data to the fetched post list
    setUserInput({ userName: '', message: '' }); // Clear the form inputs
  };

  return (
    <div>
      <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='userName'>Name</label>
        <input
          type='text'
          name='userName'
          value={userInput.userName}
          onChange={handleChange}
          placeholder='Input your name...'
          required
        />
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
export default AddForm;
