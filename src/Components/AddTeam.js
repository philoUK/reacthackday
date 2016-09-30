import React, { PropTypes } from 'react'

class AddTeam extends React.Component {
  render() {
    return (
      <div>
        <input type='text' ref={(txt) => this._input = txt} />&nbsp;
        <input type='button' value='Add Team' onClick={this._handleClick.bind(this)} />
      </div>
    );
  }

  _handleClick(e) {
    e.preventDefault();
    this.props.actions.addTeam(this._input.value);
  }
}

export default AddTeam;
