import { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = ({ onFetched }) => {
  const [users, setUsers] = useState([]);

  // Fetch users (authors) from API
  useEffect(() => {
    axios
      .get('http://localhost:3300/api/users')
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  // Fetch posts and comments from local API
  useEffect(() => {
    if (users.length === 0) return;

    axios
      .get('http://localhost:3300/api/posts')
      .then((res) => {
        const allPosts = res.data.posts;
        const postsWithUsers = allPosts.map((post) => {
          const postAuthor = users.find((user) => user._id === post.user);

          return {
            message: post.message,
            userName: postAuthor
              ? `${postAuthor.first_name} ${postAuthor.last_name}`
              : 'Unknown User',
            date: new Date(post.createdAt).toLocaleString(),
            comments: post.comments, // array of the comment ids
          };
        });

        const postsWithUsersAndComments = postsWithUsers.map((post) => {
          const comments = post.comments.map((comment) => {
            const commentAuthor = users.find(
              (user) => user._id === comment.user
            );
            return {
              content: comment.comment,
              commentAuthor: commentAuthor
                ? `${commentAuthor.first_name} ${commentAuthor.last_name}`
                : 'Unknown User',
              date: new Date(comment.createdAt).toLocaleString(),
            };
          });

          return {
            ...post,
            comments: comments,
          };
        });

        // Sort posts by date from newest to oldest
        const sortedPosts = postsWithUsersAndComments.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        onFetched(sortedPosts); // send sorted post list as a props to parent component
      })
      .catch((err) => console.error('Error fetching posts:', err));
  }, [users, onFetched]);
};

export default FetchData;
