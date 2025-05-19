import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const members = JSON.parse(localStorage.getItem('members')) || [];

const Profile = () => {
  const navigate = useNavigate();
  const [userID, setUserId] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const clickedUserId = localStorage.getItem('clickedUserId');
    if (clickedUserId) {
      setUserId(JSON.parse(clickedUserId));
    } else {
      navigate('/members');
    }
  }, [navigate]);

  useEffect(() => {
    if (userID) {
      const foundUser = members.find((user) => user.id === userID);
      if (foundUser) {
        setUserInfo(foundUser);
      } else {
        navigate('/members'); // fallback, если пользователь не найден
      }
    }
  }, [userID, navigate]);

  if (!userInfo) {
    return <p>Loading user profile...</p>;
  }

  return (
    <div>
      <header className='profile-header'>
        <nav className='navigation'>
          <Link to='/members'>Back to Members List</Link>
          <Link to='/'>Log out</Link>
        </nav>
      </header>
      <h1>Welcome, {userInfo.name}!</h1>
      <div className='user-info'>
        <ul>
          <li>
            <strong>Name:</strong> {userInfo.name}
          </li>
          <li>
            <strong>Email:</strong> {userInfo.email}
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
