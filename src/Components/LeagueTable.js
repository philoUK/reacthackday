import React, { PropTypes } from 'react'
import ResultsTable from './ResultsTable'
import AddTeam from "./AddTeam"

class LeagueTable extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      matches: [],
      rules: {
        pointsForWin: 3,
        pointsForDraw: 1
      },
      dummyResults: [
        {
          name: "Chalgrove United",
          for: 3,
          against: 2,
          won: 1,
          drawn: 1,
          lost: 0,
          points: 4
        },
        {
          name: "Watlington Rovers",
          for: 2,
          against: 3,
          won: 0,
          drawn: 1,
          lost: 1,
          points: 1
        }
      ]
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
        {/*
        <AddMatch teams={this.state.teams} actions={this.actions} />
        */}
        <ResultsTable results={this.state.dummyResults} />
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
