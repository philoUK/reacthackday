import React from 'react'
import LeagueRow from './LeagueRow'

class ResultsTable extends React.Component {
    componentWillMount() {
      this.setState({results: this.props.results || []});
    }

    componentDidMount() {
      this.sort("points", true);
    }

    componentWillReceiveProps(nextProps) {
      this.sort(this.state.sort.column, this.state.sort.descending, nextProps.results);
    }

    render(){
        return (
            <div className="results-table">
                <table className="table table-condensed table-striped">
                    <thead>
                    <tr>
                        <th onClick={() => this.sort("team")}>Team</th>
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

    sort(column, descending, results) {
      if (descending === undefined) {
        descending = !this.state.sort.descending;
      }
      results = results || this.state.results;
      if (column === "team") {
        this.sortInternal(column, descending, (a, b) => b[column].localeCompare(a[column]), (a, b) => a[column].localeCompare(b[column]), results);
      }
      else {
        this.sortInternal(column, descending, (a, b) => b[column] - a[column], (a, b) => a[column] - b[column], results);
      }
    }

    sortInternal(column, descending, compareDescending, compareAscending, results) {
      this.setState({
        results: results.sort((a, b) => descending ? compareDescending(a, b) : compareAscending(a, b)),
        sort: { column, descending }
      });
    }
}

export default ResultsTable;
