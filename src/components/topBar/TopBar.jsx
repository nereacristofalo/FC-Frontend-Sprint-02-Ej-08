import React from 'react';
import BackButton from './backButton/BackButton';
import Profile from './profile/Profile';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <BackButton />
      <Profile />
    </div>
  );
};

export default TopBar;
