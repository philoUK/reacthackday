import React, { Component } from 'react';
import LeagueTable from "./Components/LeagueTable";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>League Table</h2>
        </div>
        <div className="App-intro">
          <LeagueTable />
        </div>
      </div>
    );
  }
}

export default App;
