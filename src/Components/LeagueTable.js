import React, { PropTypes } from 'react'

class LeagueTable extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      matches: [],
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
        {/*
        <AddMatch teams={this.state.teams} actions={this.actions} />
        <ResultsTable />
        <div className="settings">
          <LeagueRules actions={this.actions} />
          <LeagueRules actions={this.actions} />
          <AddTeam actions={this.actions} />
        </div>
        */}
      </div>
    )
  }
}

export default LeagueTable;
