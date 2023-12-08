import logo from './logo.svg';
import './App.css';
import UserProfile from './UserProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserProfile
          name={"Andre  Guillermo Andrade"}
          dateOfBirth={"1/31/1999"}
          age={24}
          location={"Guayaquil, Ecuador"}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
