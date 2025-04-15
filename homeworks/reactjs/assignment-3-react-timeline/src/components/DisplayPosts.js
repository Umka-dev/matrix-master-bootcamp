import React from 'react';

const DisplayPosts = ({ postList }) => {
  return (
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
  );
};
export default DisplayPosts;
