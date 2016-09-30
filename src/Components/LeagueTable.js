import React, { PropTypes } from 'react'
import ResultsTable from './ResultsTable'
import AddTeam from "./AddTeam"
import AddMatch from "./AddMatch"
import calculateResults from "../Model/calculateResults"

class LeagueTable extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      matches: [
        {
          team1: {teamName: "Chalgrove", score: 1},
          team2: {teamName: "Watlington", score: 0}
        },
        {
          team1: {teamName: "Chalgrove", score: 0},
          team2: {teamName: "Stadhampton", score: 2}
        },
        {
          team1: {teamName: "Stadhampton", score: 1},
          team2: {teamName: "Watlington", score: 1}
        },
      ],
      rules: {
        pointsForWin: 3,
        pointsForDraw: 1
      }
    };

    this.actions = {
      addTeam: this.addTeam.bind(this),
      addMatch: this.addMatch.bind(this),
      setPointsForWin: this.setPointsForWin.bind(this),
      setPointsForDraw: this.setPointsForDraw.bind(this)
    };
  }

  addTeam(name) {
    this.setState({
      teams: this.state.teams.concat(name)
    });
  }

  setPointsForWin(points) {
    this.setState({
      rules: {
        pointsForWin: points,
        pointsForDraw: this.state.rules.pointsForDraw
      }
    });
  }

  setPointsForDraw(points) {
    this.setState({
      rules: {
        pointsForWin: this.state.rules.pointsForWin,
        pointsForDraw: points
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
        <ResultsTable results={calculateResults(this.state.matches, this.state.rules)} />
        <div className="settings">
          {/*
          <LeagueRules actions={this.actions} />
          <LeagueRules actions={this.actions} />
          */}
          <AddTeam actions={this.actions} />
        </div>
        <p>{JSON.stringify(this.state)}</p>
      </div>
    )
  }
}

export default LeagueTable;
