import React, { PropTypes } from 'react'

class LeagueRow extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.team.name}</td>
                <td>{this.props.team.for}</td>
                <td>{this.props.team.against}</td>
                <td>{this.props.team.won}</td>
                <td>{this.props.team.drawn}</td>
                <td>{this.props.team.lost}</td>
                <td>{this.props.team.points}</td>
            </tr>
        )
    }
}

export default LeagueRow;