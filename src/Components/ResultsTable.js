import React from 'react'
import LeagueRow from './LeagueRow'

class ResultsTable extends React.Component {
    render(){
        let results = this.props.results || [];
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
                        {results.map(result => <LeagueRow result={result} key={result.team} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ResultsTable;
