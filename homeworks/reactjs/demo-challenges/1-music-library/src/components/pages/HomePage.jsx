import React from 'react';
import useFetch from '../hooks/useFetch';

const HomePage = () => {
  const [albums] = useFetch('https://jsonplaceholder.typicode.com/albums');

  return (
    <div>
      <h2>Popular albums</h2>
      <ul>
        {albums?.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
