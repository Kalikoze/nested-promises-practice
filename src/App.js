import React, { Component } from 'react';
import { getRails, getBuses, getSkyRides } from './apiCalls';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/rtd-schedules')
      .then(res => res.json())
      .then(schedules => {
        const { rails, buses, skyRides } = schedules;
        const railLines = getRails(rails);
        const busRoutes = getBuses(buses);
        const skyRideLines = getSkyRides(skyRides);
        Promise.all([railLines, busRoutes, skyRideLines]).then(data => console.log(data))
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Nested Promises Practice</h1>
      </div>
    )
  }
}

export default App;