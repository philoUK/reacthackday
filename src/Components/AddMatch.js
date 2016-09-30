import React, { PropTypes } from 'react'

class AddMatch extends React.Component {
    constructor() {
        super();
        this.state = {
            team1: {
                teamName: "",
                score: 0
            },
            team2: {
                teamName: "",
                score: 0
            }
        };
    }

    render () {
        return (
            <div className="add-match">
                {this._getTeam("team1")}
                {this._getTeam("team2")}
                <button onClick={this._addClick.bind(this)}>Add</button>
            </div>
        );
    }

    _getTeam(team) {
        var teams = this.props.teams || [
            "England",
            "New Zealand"
        ];

        return (
            <span>
                <select
                    defaultValue="-- Select Team --"
                    value={this.state[team].teamName}
                    onChange={this._nameChange.bind(this, team)}>

                    {teams.map(t => <option value={t}>{t}</option>)}
                </select>
                <input
                    type="number"
                    value={this.state[team].score}
                    onChange={this._scoreChange.bind(this, team)}/>
            </span>
        );
    }

    _addClick(event) {
        event.preventDefault();
        this.props.actions.addMatch(this.state);
    }

    _scoreChange(team, event) {
        event.preventDefault();
        this.state[team].score = event.target.value;
        this.setState(this.state);
    }

    _nameChange(team, event) {
        event.preventDefault();
        this.state[team].teamName = event.target.value;
        this.setState(this.state);
    }
}

export default AddMatch;
