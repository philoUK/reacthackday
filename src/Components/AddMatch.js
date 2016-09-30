import React, { PropTypes } from 'react'

class AddMatch extends React.Component {
    constructor() {
        super();
        this.state = this._initialState();
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
        let defaultValue = "-- Select Team --";
        var teams = this.props.teams || [];
        teams.unshift(defaultValue)

        return (
            <span>
                <select
                    defaultValue={defaultValue}
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
        this.setState(this._initialState());
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

    _initialState() {
        return {
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
}

export default AddMatch;
