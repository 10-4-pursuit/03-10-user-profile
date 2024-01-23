import React from 'react';
import UserProfile from './UserProfile';

const App = () => {
  const userName = "Jann Pena";
  const userLocation = "New York";

  return (
    <div>
      <h1>My App</h1>
      <UserProfile name={userName} location={userLocation} />
    </div>
  );
};

export default App;