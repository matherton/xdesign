import React from 'react';
import logo from './assets/spacex-logo.png';
import reload from './assets/img/refresh.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">

        <div className="Page-title">
          <img src={logo} className="logo" alt="space x" /> LAUNCHES
        </div>

        <div className="Reload-data">
          Reload Data <span><img src={reload} alt="" /></span>
        </div>
        
      </header>

      <main className="App-main">
        
      </main>

      <footer className="App-footer">
        
      </footer>

    </div>
  );
}

export default App;
