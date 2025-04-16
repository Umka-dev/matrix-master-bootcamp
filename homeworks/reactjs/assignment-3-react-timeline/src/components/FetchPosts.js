import { useEffect, useState } from 'react';
import axios from 'axios';

const FetchPosts = ({ onFetched }) => {
  const [users, setUsers] = useState([]);

  // Fetch users (authors) from API
  useEffect(() => {
    axios
      .get('http://localhost:3300/api/users')
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  console.log('users:', users);

  // Fetch posts from API
  useEffect(() => {
    if (users.length === 0) return;

    axios
      .get('http://localhost:3300/api/posts')
      .then((res) => {
        const allPosts = res.data.posts;
        console.log('Posts: ', allPosts);

        const postsWithUsers = allPosts.map((post) => {
          const author = users.find(
            (user) => user._id === post.user.toString()
          );

          return {
            userName: author
              ? `${author.first_name} ${author.last_name}`
              : 'Unknown User',
            message: post.message,
            date: new Date(post.createdAt).toLocaleDateString(),
          };
        });

        // Sort posts by date from newest to oldest
        const sortedPosts = postsWithUsers.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        onFetched(sortedPosts);
      })
      .catch((err) => console.error('Error fetching posts:', err));
  }, [users, onFetched]);
};

export default FetchPosts;
