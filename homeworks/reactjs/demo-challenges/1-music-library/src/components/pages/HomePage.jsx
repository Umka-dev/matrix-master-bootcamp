import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

import Searchbar from '../Searchbar';

const HomePage = () => {
  const [albums] = useFetch('https://jsonplaceholder.typicode.com/albums');
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  const handleUserSearch = (userInput) => {
    const trimmedInput = userInput.trim();

    if (trimmedInput) {
      const filtered = albums.filter((album) =>
        album.title.toLowerCase().includes(trimmedInput.toLowerCase())
      );
      setFilteredAlbums(filtered);
    } else {
      setFilteredAlbums([]);
    }
  };

  return (
    <div className='display-slyles'>
      <Searchbar onSearch={handleUserSearch} />
      {filteredAlbums.length ? <h2>Search results</h2> : null}
      <ul>
        {filteredAlbums?.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
