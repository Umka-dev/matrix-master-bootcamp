import React, { useState } from 'react';

const AddCommentForm = ({ postId, onAddComment }) => {
  const [input, setInput] = useState({ comment: '' });

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
    const newComment = {
      content: input,
      commentAuthor: 'You',
      date: new Date().toLocaleDateString(),
    };
    onAddComment(postId, newComment); // Add user inputted comment to the fetched comment list
    setInput({ comment: '' }); // Clear the form input
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
