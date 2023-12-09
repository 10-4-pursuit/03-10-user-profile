import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserProfile from './UserProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserProfile name="Ryan" location="San Francisco" />
        <UserProfile name="Tyler" location="Seattle" />
        <UserProfile name="Mikenzi" location="New York" />
      </header>
    </div>
  );
}

export default App;
