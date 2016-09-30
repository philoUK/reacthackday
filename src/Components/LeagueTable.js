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
    this.state = {
      teams: ["Chalgrove", "Watlington", "Stadhampton"],
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
        <ResultsTable results={calculateResults(this.state.matches, this.state.rules)} />
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
