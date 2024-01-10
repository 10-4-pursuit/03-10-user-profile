import React from 'react';

const UserProfile = ({ name, location }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Location: {location}</p>
    </div>
  );
};

export default UserProfile;