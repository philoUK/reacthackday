import React from 'react'
import ResultsTable from './ResultsTable'
import AddTeam from "./AddTeam"
import LeagueRules from "./LeagueRules"
import AddMatch from "./AddMatch"
import JsonDebug from "./JsonDebug"

import calculateResults from "../Model/calculateResults"

class LeagueTable extends React.Component {
  constructor() {
    super();

    const savedState = localStorage.getItem("LeagueTable.state");
    if (savedState) {
      this.state = JSON.parse(savedState);
    }
    else {
      this.state = {
        teams: [],
        matches: [],
        rules: {
          pointsForWin: 3,
          pointsForDraw: 1
          }
      };
    }

    this.actions = {
      addTeam: this.addTeam.bind(this),
      removeTeam: this.removeTeam.bind(this),
      addMatch: this.addMatch.bind(this),
      setPointsForWin: this.setPointsForWin.bind(this),
      setPointsForDraw: this.setPointsForDraw.bind(this)
    };
  }

  componentDidUpdate() {
    localStorage.setItem("LeagueTable.state", JSON.stringify(this.state));
  }

  addTeam(name) {
    this.setState({
      teams: this.state.teams.concat(name)
    });
  }

  removeTeam(name) {
    this.setState({
      teams: this.state.teams.filter(team => team !== name),
      matches: this.state.matches.filter((match) => match.team1.teamName !== name && match.team2.teamName !== name)
    });
  }

  setPointsForWin(points) {
    this.setState({
      rules: {
        pointsForWin: Number(points),
        pointsForDraw: this.state.rules.pointsForDraw
      }
    });
  }

  setPointsForDraw(points) {
    this.setState({
      rules: {
        pointsForWin: this.state.rules.pointsForWin,
        pointsForDraw: Number(points)
      }
    });
  }

  addMatch(match) {
    this.setState({
      matches: this.state.matches.concat(match)
    });
  }

  render () {
    return (

      <div className="league-table">

        <AddMatch teams={this.state.teams} actions={this.actions} />
        <ResultsTable results={calculateResults(this.state.matches, this.state.rules)} actions={this.actions}/>
        <div className="settings">
          <LeagueRules pointsType='win' points={this.state.rules.pointsForWin} setPoints={this.actions.setPointsForWin} />
          <LeagueRules pointsType='draw' points={this.state.rules.pointsForDraw} setPoints={this.actions.setPointsForDraw} />
          <AddTeam actions={this.actions} />
        </div>
        <JsonDebug info={this.state} />
      </div>
    )
  }
}

export default LeagueTable;
