import React from 'react';

const UserProfile = ({ name, location }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default UserProfile;