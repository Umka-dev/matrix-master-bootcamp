import React, { useState } from 'react';

import AddPostForm from './AddPostForm';
import DisplayData from './DisplayData';
import FetchData from './FetchData';

const PostsContainer = () => {
  const [posts, setPosts] = useState([]);
  const [fetched, setFetched] = useState(false);

  // Handler for data received from FetchData
  const handleDataFetched = (fetchedPosts) => {
    // console.log('fetchedPosts: ', fetchedPosts);
    if (!fetched) {
      setPosts(fetchedPosts);
      setFetched(true);
    }
  };

  const handleAddComment = (postIdx, newComment) => {
    const updatedPosts = [...posts]; // create a copy of posts array
    updatedPosts[postIdx].comments = [
      ...(updatedPosts[postIdx].comments || []),
      {
        ...newComment,
        commentAuthor: 'Unknown User',
        content: newComment.content.comment,
      },
    ];
    setPosts(updatedPosts);
  };

  return (
    <div className='pageLayout'>
      <AddPostForm onUpdatedPostList={setPosts} />
      <FetchData onFetched={handleDataFetched} />
      <DisplayData postList={posts} onAddComment={handleAddComment} />
    </div>
  );
};

export default PostsContainer;
