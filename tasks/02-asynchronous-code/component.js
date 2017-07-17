import React from 'react'

module.exports = React.createClass({
  render() {
    require('./test')
    return (
      <div>
        <div className="panel-heading">
          <h1 className="exercise-two">02 - Asynchronous code</h1>
        </div>
        <div className="panel-body">
          <p>This exercise will get you familiar with some of the common practices used when testing asynchronous javascript.</p>
          <p>In this exercise you will be testing the callback of a function is used as expected. You will also need to ensure that <code>done</code> is used correctly otherwise the tests wont run.</p>
          <p>When you are testing asynchronous code you will often need to put your assertions in the callback of the function you are testing.</p>

          <pre>
            {`
it('should do something', (done) => {
  myFunction(params, (result) => {
    // Run assertions here
    done()
  })
})
            `}
          </pre>
        </div>
      </div>
    )
  }
})
