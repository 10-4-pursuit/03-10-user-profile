import UserProfile from './UserProfile.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        <UserProfile
        name = "Stitch"
        location = "Hawaii"
        />
      </h1>
    </div>
  );
}

export default App;
