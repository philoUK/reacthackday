import React from 'react'

class TeamScore extends React.Component {
  render () {
    const teams = this.props.teamList || [];

    return (
        <span>
            <select value={this.props.team.teamName} onChange={this.props.teamChanged}>
                <option value="">-- Select Team --</option>
                {teams.map(t => <option value={t} key={t}>{t}</option>)}
            </select>
            <input type="number" min="0" value={this.props.team.score} onChange={this.props.scoreChanged}/>
        </span>
    );
  }
}

export default TeamScore;
