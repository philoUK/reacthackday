import React, { Component } from 'react';

class LeagueRules extends React.Component {
  render() {
    return (
      <div>
        <span>points for {this._getRuleType()}</span>&nbsp;
        <input type='text' ref={(txt) => this._input = txt} />
        <input type='button' value='add' onClick={this._handleClick.bind(this)} />
      </div>
    );
  }

  _getRuleType() {
    return this.props.forWin ? 'win' : 'draw';
  }

  _handleClick(e) {
    e.preventDefault();
    if(this.props.forWin) {
      this.props.actions.pointsForWin(this._input.value);
    } else {
      this.props.actions.pointsForDraw(this._input.value);
    }
    this._input.value = '';
  }
}
