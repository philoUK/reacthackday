import React, { PropTypes } from 'react'
import LeagueRow from './LeagueRow'

class ResultsTable extends React.Component {
    render(){
        let teams = this.props.teams || [];
        return (
            <div className="results-table">
                <table>
                    <thead>
                    <tr>
                        <th>Team</th>
                        <th>For</th>
                        <th>Against</th>
                        <th>Won</th>
                        <th>Drawn</th>
                        <th>Lost</th>
                        <th>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                        {teams.map(team => <LeagueRow team={team} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ResultsTable;
