import React from 'react'

module.exports = React.createClass({
  render() {
    require('./test')
    return (
      <div>
        <div className="panel-heading">
          <h1 className="exercise-four">04 - Stubs</h1>
        </div>
        <div className="panel-body">
          <p>Stubs are used when you want to prevent a function from running. You can use them to manipulate the value a function returns.</p>
          <p>In the first part of this exercise you will need to test the <code>doubleRandom</code> function. This uses a random number helper which will need to be stubbed out so that you can assert that it has correctly doubled the result.</p>
          <p>In the second part of the exercise you will need to stub out the <code>request</code> module. This is an asynchronous function so instead of making it <code>return</code> a value you will need to change what it <code>yields</code>.</p>

          <p>When testing a function which returns a value you can use <code>returns</code></p>
          <pre>
            {`
cont myObj = {
  myFunction() { return true; }
};

sinon.stub(myObj, 'myFunction').returns(false);
            `}
          </pre>

          <p>When <code>myObj.myFunction</code> is called in this test it will now return false</p>
          <p>For testing a function which calls back instead you can change which params are passed to the callback</p>
          <pre>
            {`
const myObj = {
  myFucntion(cb) { return cb(true, false) }
};
sinon.stub(myObj, 'myFucntion').yields(false, true);
            `}
          </pre>

          <p>When <code>myObj.myFucntion</code> is called it will now callback with the params switched</p>
        </div>
      </div>
    )
  }
})
