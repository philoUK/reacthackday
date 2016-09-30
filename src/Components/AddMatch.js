import React from 'react'
import TeamScore from "./TeamScore"

class AddMatch extends React.Component {
    constructor() {
        super();
        this.initialState = {
            team1: {
                teamName: "",
                score: 0
            },
            team2: {
                teamName: "",
                score: 0
            }
        };
        this.state = this.initialState;
    }

    render () {
        return (
            <div className="add-match">
                <TeamScore teamList={this.props.teams} team={this.state.team1} teamChanged={this.setTeam1Name.bind(this)} scoreChanged={this.setTeam1Score.bind(this)} />
                <TeamScore teamList={this.props.teams} team={this.state.team2} teamChanged={this.setTeam2Name.bind(this)} scoreChanged={this.setTeam2Score.bind(this)} />
                <button onClick={this._addClick.bind(this)}>Add</button>
            </div>
        );
    }

    _addClick(event) {
        event.preventDefault();
        // TODO show an error message
        if (this.state.team1.teamName && this.state.team2.teamName && this.state.team1.teamName !== this.state.team2.teamName) {
          this.props.actions.addMatch(this.state);
          this.setState(this.initialState);
        }
    }

    setTeam1Name(event) {
      this.setState({
        team1: {
          teamName: event.target.value,
          score: this.state.team1.score
        }
      });
    }

    setTeam2Name(event) {
      this.setState({
        team2: {
          teamName: event.target.value,
          score: this.state.team2.score
        }
      });
    }

    setTeam1Score(event) {
      this.setState({
        team1: {
          teamName: this.state.team1.teamName,
          score: Number(event.target.value)
        }
      });
    }

    setTeam2Score(event) {
      this.setState({
        team2: {
          teamName: this.state.team2.teamName,
          score: Number(event.target.value)
        }
      });
    }
}

export default AddMatch;
