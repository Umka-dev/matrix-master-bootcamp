import React from 'react';

const DisplayPosts = ({ posts, handleClick }) => {
  //   console.log('Display posts : ', posts);

  return (
    <div>
      <h2>All posts</h2>
      {posts?.map((post) => (
        <div key={post.postId} className='one-post'>
          <p>{post.message}</p>
          <div className='post-statistics'>
            <h5>
              Uploader: <span>{post.votes}</span> upvotes
            </h5>
            <button onClick={() => handleClick(post.postId)}>Upvote</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default DisplayPosts;
