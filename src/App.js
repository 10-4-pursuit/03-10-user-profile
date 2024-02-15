import './App.css';
import UserProfile from './UserProfile';

function App() {
  return (
    <div className="App">
      <UserProfile name="John Doe" location="New York"/> 
      <UserProfile name="Jane Doe" location="Paris"/>
    </div>
  );
}

export default App;
