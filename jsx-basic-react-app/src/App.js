import UserProfile from './UserProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserProfile name="Daniel Torres" location="New York" age="40" />
      <UserProfile name="John Smith" location="California" age="30" />
      <UserProfile name="Jane Doe" location="Florida" age="35" />
      <UserProfile name="Michael Johnson" location="Texas" age="40" />
      <UserProfile name="Sarah Lee" location="Pennsylvania"  age="45"/>
    </div>
  );
}

export default App;
