import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// const currentUser = JSON.parse(localStorage.getItem('currentUser'));

const Members = () => {
  const navigate = useNavigate();
  // console.log('members: ', members);
  const [members, setMembers] = useState([]);
  const [logedInUser, setLogedInUser] = useState();

  useEffect(() => {
    localStorage.removeItem('clickedUserId');
    const storedMembers = JSON.parse(localStorage.getItem('members'));
    if (storedMembers) {
      setMembers(storedMembers);
    }

    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setLogedInUser(JSON.parse(currentUser));
    } else {
      navigate('/');
    }
  }, [navigate]);

  // Handle click the 'view profile' button
  const handleViewProfile = (memberId) => {
    localStorage.setItem('clickedUserId', memberId);
    navigate('/profile');
  };

  // console.log('logedInUser', logedInUser);

  if (!logedInUser) {
    return null;
  }

  return (
    <div>
      <header className='members-header'>
        <h4>Welcome, {logedInUser.name}!</h4>
        <nav className='navigation'>
          <Link to='/logout'>Log out</Link>
        </nav>
      </header>
      <h1>LinkedIn Members:</h1>
      <div className='user-list'>
        <ul>
          {members?.map((member) => (
            <li key={member.id} className='user-item'>
              <p>{member.name}</p>
              <button onClick={() => handleViewProfile(member.id)}>
                View Profile
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Members;
