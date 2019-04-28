import React, { Component } from 'react';
import logo from './assets/spacex-logo.png';
import reload from './assets/img/refresh.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v3/launches')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {

    var { isLoaded, items} = this.state;

    if(!isLoaded) {
      return <div>Loading....</div>;
    }

    else {

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
                {Object.keys(items).map(item => {
                  return <li key={item}>
                          <span className="Result-no">#{item}</span>
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
}

export default App;
