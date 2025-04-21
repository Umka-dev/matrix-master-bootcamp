import React, { useState } from 'react';

const AddPostForm = ({ onInputSubmit }) => {
  const [input, setInput] = useState('');

  // Handle form input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    console.log('User trimmed input: ', trimmedInput);
    if (trimmedInput) {
      const newPost = {
        postId: Date.now(),
        message: trimmedInput,
        votes: 0,
      };
      onInputSubmit(newPost);
    }
    setInput('');
  };

  return (
    <div>
      <form className='addPostForm' onSubmit={handleSubmit}>
        <label htmlFor='post'>Post on Reddit</label>
        <textarea
          type='text'
          name='post'
          value={input}
          onChange={handleChange}
          placeholder='Input your post...'
          required
        ></textarea>
        <button type='submit'>Post</button>
      </form>
    </div>
  );
};

export default AddPostForm;
