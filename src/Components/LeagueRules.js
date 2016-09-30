import React from 'react'

class LeagueRules extends React.Component {
  render() {
    return (
      <div>
        <span>Points for {this.props.pointsType}:</span>&nbsp;
        <input type='number' onChange={this.update.bind(this)} defaultValue={this.props.points}/>&nbsp;
      </div>
    );
  }

  update(e) {
    this.props.setPoints(Number(e.target.value));
  }
}

export default LeagueRules;
