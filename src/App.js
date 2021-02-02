import logo from './logo.svg';
import './App.css';
import background from "./background.jpg";

function App() {
  return (
    <div className="App">
      <div style = {{backgroundImage: `url(${background})` }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Visaagan Sivagnanasuntharam
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
    </div>
  );
}

export default App;
