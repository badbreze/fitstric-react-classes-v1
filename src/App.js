import logo from './logo.svg';
import './App.css';
import Blocco from './Blocco';
import ListaPersone from './ListaPersone';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        <Blocco persona={{nome: "Nome di prova"}}>
          Children del blocco
        </Blocco>
        
        <ListaPersone/>
      </header>
    </div>
  );
}

export default App;
