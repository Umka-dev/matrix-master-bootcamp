import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('clickedUserId');
    navigate('/');
  });

  return;
};
export default Logout;
