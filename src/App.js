import React from 'react';
import UserProfile from './UserProfile';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>test</h1>
     <UserProfile name="Angela" location="Brooklyn"/>
     <UserProfile name="Britney" location="Bronx"/>
     <UserProfile name="Cam" location="Queens"/>
    </div>
  );
}

export default App;
