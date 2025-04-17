import React from 'react';
import AddCommentForm from './AddCommentForm';

const DisplayData = ({ postList, onAddComment }) => {
  // console.log('Post List to DISPLAY:', postList);
  return (
    <>
      {postList?.map((post, postIdx) => {
        return (
          <div key={postIdx}>
            <div className='postList'>
              <h3>
                {post.userName} <span> — {post.date}</span>
              </h3>
              <p>{post.message}</p>
            </div>
            <h4 className='commentsHeader'>Comments</h4>
            <AddCommentForm onAddComment={onAddComment} postId={postIdx} />
            {post.comments?.map((comment, commentIdx) => {
              return (
                <div key={commentIdx} className='comments'>
                  <h4>
                    {comment.commentAuthor} <span> — {comment.date}</span>
                  </h4>
                  <p>{comment.content}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
export default DisplayData;
