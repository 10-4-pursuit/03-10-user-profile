import React from 'react';
import UserProfile from './UserProfile';

const App = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile name="Bryan Torres" location="New York" />
    </div>
  );
};

export default App;