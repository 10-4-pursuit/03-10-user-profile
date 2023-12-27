import logo from './logo.svg';
import './App.css';
import UserProfile from './UserProfile';

function App() {
  const student = {
    name: 'Kanique Cox',
    location: 'New York',
  }
  return (
    <div className="App">
    <UserProfile prop={student}/>
    </div>
  );
}

export default App;
