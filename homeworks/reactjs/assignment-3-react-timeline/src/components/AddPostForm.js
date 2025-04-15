import React, { useState } from 'react';

const AddPostForm = () => {
  const [userInput, setUserInput] = useState({ userName: '', message: '' });
  const [postList, setPostList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(userInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      ...userInput,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }), // current data in "Month D, Year" format
    };
    setPostList((prev) => [newPost, ...prev]); // add user inputed data to a post list
    setUserInput({ userName: '', message: '' }); // clear the form
  };
  console.log(postList);
  return (
    <div className='pageLayout'>
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
      <div>
        {postList?.map((item, idx) => {
          return (
            <div key={idx} className='postList'>
              <h3>
                {item.userName} <span> — {item.date}</span>
              </h3>
              <p>{item.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddPostForm;
