import React from 'react';
import { Link } from 'react-router-dom';

const Members = () => {
  return (
    <div>
      <header className='members-header'>
        <h4>Welcome, USER NAME!</h4>
        <nav className='navigation'>
          <Link to='/'>Log out</Link>
        </nav>
      </header>
      <h1>LinkedIn Members:</h1>
      <div className='user-list'>
        <ul>
          <div>
            <li>User name</li>
            <button>View Profile</button>
          </div>
          <div>
            <li>User name</li>
            <button>View Profile</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Members;
