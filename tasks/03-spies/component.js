import React from 'react'

module.exports = React.createClass({
  render() {
    require('./test')
    return (
      <div>
        <div className="panel-heading">
          <h1 className="exercise-three">03 - Spies</h1>
        </div>
        <div className="panel-body">
          <p>Spies allow you to a listen to a function and get information on how it has been used. This could be the amount of times it was called or which parameters it was called with each time.</p>
          <p>In this exercise you will need to write a test to ensure that the helper function is correctly used. This means spying on the helper function and checking what params it was called with.</p>
          <p>Spies are attached to a function on an object as follows</p>
          <pre>
            {`
const myObj = {
  myFunction() { return true; }
};

sinon.spy(myObj, 'myFunction');
            `}
          </pre>

          <p>There will now be a spy listening to calls of <code>myObj.myFunction</code>.</p>

          <p>You can then use sinon chai to run assertions against this eg.</p>
          <pre>
            {`
expect(myObj.myFunction).to.have.been.called();
expect(myObj.myFunction).to.have.been.calledWith(7);
expect(myObj.myFunction.firstCall).to.have.been.calledWith(12);
            `}
          </pre>
        </div>
      </div>
    )
  }
})
