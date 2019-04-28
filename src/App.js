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
    fetch('https://api.spacexdata.com/v3/launches?limit=10')
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
                {
                  Object.keys(items).map(item => {
                  return <li key={item}>
                          <span className="Result-no">{this.state.items[item].flight_number}</span>
                          <span className="Result-no">{this.state.items[item].mission_name}</span>
                          <span className="Result-no">{this.state.items[item].launch_date_local}</span>
                          <span className="Result-no">{this.state.items[item].rocket.rocket_name}</span>
                        </li>
                })}
                {console.log('The returned Object', items)}
                {console.log('The state', this.state.items[0].mission_name)}
                {console.log('the state mission date', this.state.items[0].mission_date)}
                {console.log(this.state.items[0].rocket_name)}
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
