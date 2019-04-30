import React, { Component } from 'react';
import logo from './assets/spacex-logo.png';
import reload from './assets/img/refresh.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      flights: [],
      isLoaded: false,
      year: false,
      reverse: false,
    };
  }

  yearSort = (state) => {
    this.setState({year: state || !this.state.year});
  }

  toggleReverse = (state) => {
    this.setState({reverse: state || !this.state.reverse});
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v3/launches?limit=10')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          flights: json,
        })
      });
  }

  render() {

    var { isLoaded, flights} = this.state;
    
    if(!isLoaded) {
      return <div>Loading....</div>;
    }

    else {

      return (
        <div className="App">

          <header className="App-header">

            <div className="Page-title">
              <img src={logo} className="logo" alt="space x" />
              <span>LAUNCHES</span>
            </div>

            <a href='/' className="Reload-data">
              Reload Data <span><img src={reload} alt="" /></span>
            </a>
            
          </header>

          <main className="App-main">

            <div className="Data-holder">

              <div className="Filter-btns">
                <button onClick={() => this.yearSort()}
                 className="filter">Filter by Year</button>
                <button onClick={() => this.toggleReverse()}
                  className={`${this.state.reverse ? 'sorted' : 'sort' }`} style={{ width: '163px' }}>{`${this.state.reverse ? 'Sort Ascending' : 'Sort Descending' }`}</button>
              </div>

              { !this.state.reverse &&
                <ul className="launches">
                  {
                    Object.keys(flights).map(flight => {
                    return <li key={flight}>
                            <span className="flight">#{this.state.flights[flight].flight_number}</span>
                            <span className="name">{this.state.flights[flight].mission_name}</span>
                            <span className="date">{(this.state.flights[flight].launch_date_local).slice(0,10)}</span>
                            <span className="rocket">{this.state.flights[flight].rocket.rocket_name}</span>
                          </li>
                  })}
                </ul>
              }

              { this.state.reverse &&
                <ul className="launches">
                  {
                    Object.keys(flights).map(flight => {
                    return <li key={flight}>
                            <span className="flight">#{this.state.flights[flight].flight_number}</span>
                            <span className="name">{this.state.flights[flight].mission_name}</span>
                            <span className="date">{(this.state.flights[flight].launch_date_local).slice(0,10)}</span>
                            <span className="rocket">{this.state.flights[flight].rocket.rocket_name}</span>
                          </li>
                  }).reverse()}
                </ul>
              }

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
