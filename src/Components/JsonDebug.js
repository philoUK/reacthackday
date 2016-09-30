import React from 'react'

class JsonDebug extends React.Component {
  render () {
    return (
      <div style={{"textAlign": "left"}}>
        <pre>{JSON.stringify(this.props.info, null, 2)}</pre>
      </div>
    )
  }
}

export default JsonDebug;
