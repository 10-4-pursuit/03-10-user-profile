import UserProfile from './UserProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserProfile name="Jane Doe" location="Bermuda Triangle"/>
      <UserProfile name="Danny Doe"  location="SomewhereinthewooodsinStatenIslandsleepingwiththeturkeys"/>
    </div>
  );
}

export default App;
