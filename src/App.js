import React from 'react';
import logo from './assets/spacex-logo.png';
import reload from './assets/img/refresh.png';
import './App.css';

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getSpaceXData = fetch('https://api.spacexdata.com/v3/launches')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

const requestURL = `curl -s https://api.spacexdata.com/v3/launches/latest | jq`;
console.log(getSpaceXData);

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
            <button className="filter">Filter by Year</button>
            <button className="sort">Sort Descending</button>
          </div>

          <ul className="launches">
            {a.map(i => {
              return <li>
                      <span className="Result-no">#{i}</span>
                      <span className="Result-no">mission_name</span>
                      <span className="Result-no">mission_date</span>
                      <span className="Result-no">rocket_name</span>
                    </li>
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
