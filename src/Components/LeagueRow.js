import React from 'react'

class LeagueRow extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.result.team}</td>
                <td>{this.props.result.for}</td>
                <td>{this.props.result.against}</td>
                <td>{this.props.result.won}</td>
                <td>{this.props.result.drawn}</td>
                <td>{this.props.result.lost}</td>
                <td>{this.props.result.points}</td>
            </tr>
        )
    }
}

export default LeagueRow;
