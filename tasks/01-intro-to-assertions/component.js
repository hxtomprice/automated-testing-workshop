import React from 'react'

module.exports = React.createClass({
  render() {
    require('./test')
    return (
      <div>
        <div className="panel-heading">
          <h1 className="exercise-one">01 - Introduction to Assertions</h1>
        </div>
        <div className="panel-body">
          <p>Mocha is our test framework of choice. It allows you to test synchronous or asynchronous javascript using nodejs or in your browser.</p>
          <p>Chai is an assertion library which allows your tests to follow more of a natural language to make tests more readable.</p>
          <p>This exercise will  get you familiar with both of these.</p>
          <p>For this exercise you will need to write tests for a basic library. To do this you will need to check out the syntax for mocha and chai.</p>

          <h2>Mocha layout</h2>
          <p>Mocha uses <code>describe</code> <code>context</code> and <code>it</code> blocks to layout tests.</p>
          <p>Usually we would use <code>describe</code> to name the file or function we are testing.</p>
          <p><code>context</code> is used to give more information on the variables of the test.</p>
          <p><code>it</code> is what you expect the outcome to be.</p>

          <pre>
            {`
describe('isEven', () => {
  context('when passed 0', () => {
    it('should return true', () => {
      const input = 0
      const result = isEven(input)
      expect(result).to.be.true()
    })
  })

  context('when passed 1', () => {
    it('should return false', () => {
      const input = 1
      const result = isEven(input)
      expect(result).to.be.false()
    })
  })

  context('when passed 2', () => {
    it('should return true', () => {
      const input = 2
      const result = isEven(input)
      expect(result).to.be.true()
    })
  })
})
            `}
          </pre>

          <p>If a test fails it will print out to the terminal as</p>
          <pre>
            myFunction when today is Saturday should error
          </pre>

          <h2>Chai Examples</h2>

          <h3>Basic equality check</h3>
          <pre>
            {`
const foo = 'bar'
expect(foo).to.equal('bar')
            `}
          </pre>

          <h3>Equality for objects</h3>
          <p>The following will not work</p>
          <pre>
            {`
const foo = { bar: 'baz' }
expect(foo).to.equal({ bar: 'baz'} )
            `}
          </pre>
          <p>But this will</p>
          <pre>
            {`
const foo = { bar: 'baz' }
expect(foo).to.equal({ bar: 'baz'} )
            `}
          </pre>

          <h3>Other helpers</h3>
          <pre>
            {`
expect(foo).to.be.false()
expect(foo).to.be.true()
expect(foo).to.be.null()
expect(foo).to.be.undefined()
expect(foo).to.be.NaN()
expect(foo).to.contain('bar')
expect(match).to.contain(/regex/)
            `}
          </pre>
        </div>
      </div>
    )
  }
})
