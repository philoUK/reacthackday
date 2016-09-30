import React from 'react'

class LeagueRules extends React.Component {
  render() {
    return (
      <div>
        <span>Points for {this.props.pointsType}:</span>&nbsp;<input type='text' ref={(i) => this._input = i} defaultValue={this.props.points}/>&nbsp;
        <input type='button' value='update' onClick={this._handleClick.bind(this)} />
      </div>
    );
  }

  _handleClick(e) {
    e.preventDefault();
    this.props.setPoints(parseInt(this._input.value));
  }
}

export default LeagueRules;
