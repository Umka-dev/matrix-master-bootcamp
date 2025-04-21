import React, { useEffect, useState } from 'react';
import AddPostForm from '../AddPostForm';
import DisplayPosts from '../DisplayPosts';

const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];

const Feed = () => {
  const [posts, setPosts] = useState(storedPosts);

  const handleAddPost = (newPost) => {
    console.log('Post object: ', newPost);
    setPosts((prev) => [...prev, newPost]);
  };

  // Handle click the upvote button
  const handleUpvote = (postId) => {
    // console.log('Upvote button clicked!');
    // console.log('Post id is: ', postId);

    // Find post by post ID from props
    const foundPost = posts.find((post) => post.postId === postId);
    // console.log('Found post by id: ', foundPost);

    if (foundPost) {
      const updatedPost = { ...foundPost, votes: foundPost.votes + 1 };
      // console.log('Updated post: ', updatedPost);

      const updatedPosts = posts.map((post) =>
        post.postId === postId ? updatedPost : post
      );
      // console.log('Updated posts: ', updatedPosts);

      // Sort posts by upvoted rate
      const sortedPosts = updatedPosts
        .slice()
        .sort((a, b) => b.votes - a.votes);
      //   console.log('sortedPosts: ', sortedPosts);
      setPosts(sortedPosts);
    }
  };
  console.log('Updated posts: ', posts);

  useEffect(() => {
    // Save to Local Storage
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  return (
    <div>
      <h1>Welcome, Damin Signh</h1>
      <AddPostForm onInputSubmit={handleAddPost} />
      <DisplayPosts posts={posts} handleClick={handleUpvote} />
    </div>
  );
};
export default Feed;
