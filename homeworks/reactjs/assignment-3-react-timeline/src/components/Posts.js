import React, { useState } from 'react';

import AddForm from './AddForm';
import DisplayPosts from './DisplayPosts';
import FetchPosts from './FetchPosts';

const Posts = () => {
  const [postList, setPostList] = useState([]);
  const [fetched, setFetched] = useState(false);

  // Handler for data received from FetchPosts
  const handleDataFetched = (fetchedPosts) => {
    // console.log('fetchedPosts: ', fetchedPosts);
    if (!fetched) {
      setPostList((prev) => [...fetchedPosts, ...prev]);
      setFetched(true);
    }
  };

  return (
    <div className='pageLayout'>
      <AddForm onUpdatedPostList={setPostList} />
      <FetchPosts onFetched={handleDataFetched} />
      <DisplayPosts postList={postList} />
    </div>
  );
};

export default Posts;
