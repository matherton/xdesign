import React, {Component} from 'react';
import logo from './assets/spacex-logo.png';
import reload from './assets/img/refresh.png';
import './App.css';

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let connection;

fetch('https://api.spacexdata.com/v3/launches')
  .then(response => {
    return response.json();
  })
  .then(myJson => {
    const data = JSON.stringify(myJson);
    console.log(data);
    return data;
  })
  .then(data => {
    var JSONdata = {data};
    console.log(JSONdata);
  });

function getData(url = `https://api.spacexdata.com/v3/launches`, data = {}) {
  // Default options are marked with *
    return fetch(`https://api.spacexdata.com/v3/launches`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        //body: JSON.stringify(data),  body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses JSON response into native Javascript objects 
}
// ITS WORKING, ITS WORKING!!!
console.log("wonder if this will get owt?", [getData()]);

//const requestURL = `curl -s https://api.spacexdata.com/v3/launches/latest | jq`;
//console.log(data);

class App extends Component {
  render() {
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
}

export default App;
