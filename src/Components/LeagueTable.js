import React, { PropTypes } from 'react';
import AddMatch from "./AddMatch";

class LeagueTable extends React.Component {
  render () {
    return (

      <div className="league-table">
        <AddMatch />
        <ResultsTable />
        <div className="settings">
          <LeagueRules />
          <LeagueRules />
          <AddTeam />
        </div>
      </div>
    )
  }
}

export default LeagueTable;
