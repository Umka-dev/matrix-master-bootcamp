import axios from 'axios';
import React, { useState } from 'react';

const AddCommentForm = ({ postId, onAddComment }) => {
  const [input, setInput] = useState({ comment: '' });
  const UNREG_USER_ID = '680228d4ea4c0d0dec163674';

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      user: UNREG_USER_ID,
      post: postId,
      comment: input.comment,
    };

    axios
      .post(`http://localhost:3300/api/post/${postId}`, requestBody)
      .then((res) => {
        const newComment = {
          commentAuthor: 'Unregistered User',
          content: input.comment,
          date: res.data.createdAt
            ? new Date(res.data.createdAt).toLocaleString()
            : new Date().toLocaleString(),
        };
        onAddComment(postId, newComment); // Add user inputted comment to the fetched comment list
        setInput({ comment: '' }); // Clear the form input
      })
      .catch((err) => console.log('Error posting comment:', err));
  };

  return (
    <div>
      <form className='addCommentForm' onSubmit={handleSubmit}>
        <input
          type='text'
          name='comment'
          value={input.comment}
          onChange={handleChange}
          placeholder='Input your comment...'
          required
        />
        <button type='submit'>Post a comment</button>
      </form>
    </div>
  );
};
export default AddCommentForm;
