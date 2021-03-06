import React, { Component } from 'react';
import LeagueTable from "./Components/LeagueTable";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>League Table</h2>
        </div>
        <LeagueTable />
      </div>
    );
  }
}

export default App;
