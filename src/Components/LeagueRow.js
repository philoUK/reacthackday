import React from 'react'

class LeagueRow extends React.Component{
    render(){
        const result = this.props.result;
        return(
            <tr>
                <td>{result.team}</td>
                <td>{result.played}</td>
                <td>{result.won}</td>
                <td>{result.drawn}</td>
                <td>{result.lost}</td>
                <td>{result.for}</td>
                <td>{result.against}</td>
                <td>{result.points}</td>
                <td><button onClick={() => this.props.actions.removeTeam(result.team)}>x</button></td>
            </tr>
        )
    }
}

export default LeagueRow;
