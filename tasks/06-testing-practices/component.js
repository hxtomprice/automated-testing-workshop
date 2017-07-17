import React from 'react'

module.exports = React.createClass({
  render() {
    require('./test')
    return (
      <div>
        <div className="panel-heading">
          <h1 className="exercise-six">06 - Best Practices</h1>
        </div>
        <div className="panel-body">
          <h2>How would you test the file?</h2>
        </div>
      </div>
    )
  }
})
