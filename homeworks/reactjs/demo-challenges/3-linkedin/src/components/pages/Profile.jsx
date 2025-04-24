import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <header className='profile-header'>
        <nav className='navigation'>
          <Link to='/members'>Back to Members List</Link>

          <Link to='/'>Log out</Link>
        </nav>
      </header>
      <h1>Welcome, USER NAME!</h1>
      <div className='user-info'>
        <ul>
          <li>
            <strong>Name:</strong> User name
          </li>
          <li>
            <strong>Email:</strong> User email
          </li>
        </ul>
      </div>
      <Link to='/members' className='one-link'>
        Back to Members List
      </Link>
    </div>
  );
};

export default Profile;
