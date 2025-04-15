import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DisplayPosts from './DisplayPosts';

const AddPostForm = () => {
  const [userInput, setUserInput] = useState({ userName: '', message: '' });
  const [postList, setPostList] = useState([]);
  const [users, setUsers] = useState([]);

  // Fetch users (authors) from API
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  // Fetch posts from API
  useEffect(() => {
    if (users.length === 0) return; // Ensure users are loaded first

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        // Take the first post for each user
        const postsFromUsers = users.map((user) => {
          const post = res.data.find((post) => post.userId === user.id);
          return {
            userName: user.name,
            message: post ? post.body : 'No post available',
            date: new Date().toLocaleDateString(),
          };
        });

        setPostList(postsFromUsers); // Update post list with posts from each user
      })
      .catch((err) => console.error('Error fetching posts:', err));
  }, [users]); // wait when users are loaded

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
    setPostList((prev) => [newPost, ...prev]); // Add user inputted data to the fetched post list
    setUserInput({ userName: '', message: '' }); // Clear the form inputs
  };

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
      <DisplayPosts postList={postList} />
    </div>
  );
};

export default AddPostForm;
