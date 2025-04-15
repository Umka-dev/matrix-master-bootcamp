import { useEffect, useState } from 'react';
import axios from 'axios';

const FetchPosts = ({ onFetched }) => {
  const [users, setUsers] = useState([]);

  // Fetch users (authors) from API
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  // Fetch posts from API
  useEffect(() => {
    if (users.length === 0) return; // Ensure users are loaded first

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        // Take the first post for each user
        const postsFromUsers = users.map((user) => {
          const post = res.data.find((post) => post.userId === user.id);
          return {
            userName: user.name,
            message: post ? post.body : 'No post available',
            date: new Date().toLocaleDateString(),
          };
        });

        onFetched(postsFromUsers);
      })
      .catch((err) => console.error('Error fetching posts:', err));
  }, [users, onFetched]);
};

export default FetchPosts;
