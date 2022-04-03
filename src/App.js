import logo from './logo.svg';
import './App.css';
import Basic1 from './components/Basic1'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Basic1 name="Hooks"/>
        <Basic1 name="today"/>
      </header>
    </div>
  );
}

export default App;
