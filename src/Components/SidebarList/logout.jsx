import React, { useState } from 'react';
import axios from 'axios';
import './logout.css';

const logout = () => {
  const [logoutStatus, setLogoutStatus] = useState(null);

  const handleLogout = async () => {
    try {
      const response = await axios.post('localhost:3000/api/v1/users/signout');

      if (response.status === 200) {
       
        setLogoutStatus('success');
      } else {
      
        setLogoutStatus('error');
      }
    } catch (error) {
      // Handle any errors during the logout process
      console.error('Logout error:', error);
      setLogoutStatus('error');
    }
  };

  return (
    <div className="logout-container">
      <div className="logout-content">
        <h1>Logout</h1>
        <div className="logout-message">
          {logoutStatus === 'success' ? (
            <p>Logout successful. Goodbye!</p>
          ) : logoutStatus === 'error' ? (
            <p>Logout failed. Please try again.</p>
          ) : (
            <p>Are you sure you want to logout?</p>
          )}
        </div>
        {logoutStatus !== 'success' && (
          <div className="logout-buttons">
            <button className="logout-button" onClick={handleLogout}>
              Yes
            </button>
            <button className="logout-button no">No</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default logout;
