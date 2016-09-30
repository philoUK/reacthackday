import React from 'react'
import LeagueRow from './LeagueRow'

class ResultsTable extends React.Component {
    componentWillMount() {
      this.setState({results: this.props.results || []});
    }

    componentWillReceiveProps(nextProps) {
      this.setState({results: nextProps.results})
    }

    componentDidMount() {
      this.sortDescending = true;
      this.sort("points");
    }

    render(){
        return (
            <div className="results-table">
                <table>
                    <thead>
                    <tr>
                        <th onClick={() => this.stringSort("team")}>Team</th>
                        <th onClick={() => this.sort("played")}>Played</th>
                        <th onClick={() => this.sort("won")}>Won</th>
                        <th onClick={() => this.sort("drawn")}>Drawn</th>
                        <th onClick={() => this.sort("lost")}>Lost</th>
                        <th onClick={() => this.sort("for")}>For</th>
                        <th onClick={() => this.sort("against")}>Against</th>
                        <th onClick={() => this.sort("points")}>Points</th>
                        <th>{/* Delete */}</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.results.map(result => <LeagueRow result={result} actions={this.props.actions} key={result.team} />)}
                    </tbody>
                </table>
            </div>
        )
    }

    sort(prop) {
      this.sortInternal(prop, (a, b) => b[prop] - a[prop], (a, b) => a[prop] - b[prop]);
    }

    stringSort(prop) {
      this.sortInternal(prop, (a, b) => a[prop].localeCompare(b[prop]), (a, b) => b[prop].localeCompare(a[prop]))
    }

    sortInternal(prop, compareDescending, compareAscending) {
      this.setState({
        results: this.state.results.sort((a, b) => this.sortDescending ? compareDescending(a, b) : compareAscending(a, b))
      });
      this.sortDescending = !this.sortDescending;
    }
}

export default ResultsTable;
