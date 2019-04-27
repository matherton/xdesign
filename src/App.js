import React from 'react';
import logo from './assets/spacex-logo.png';
import reload from './assets/img/refresh.png';
import './App.css';

const a = [1, 10, 100, 1000, 10000];

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

        <div className="Data-holder">
          <div className="Filter-btns">
            <button>Filter by Year</button> <button>Sort Descending</button>
          </div>
          <ul className="launches">
            {a.map(i => {
              return <li>{i}</li>
            })}
          </ul>

        </div>

      </main>

      <footer className="App-footer">
        
      </footer>

    </div>
  );
}

export default App;
