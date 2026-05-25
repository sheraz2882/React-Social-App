import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from './home-components/HeaderNav';


function Profile() {
  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <HeaderNav />
        <div className="profile-content">
            
        </div>
    </div>
  );
}

export default Profile;