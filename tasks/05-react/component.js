const React = require('react')

/*
 * An awesome component which renders a header and a button which toggles the
 * background color between red and blue
 * This accepts optional props of secondHeading and children
 */
const Component = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    secondHeading: React.PropTypes.string
  },

  getInitialState() {
    return {
      color: 'blue'
    }
  },

 /*
  * When the button is clicked we toggle the background color between red and
  * blue by changing state
  */
  handleButtonClick() {
    this.setState({
      color: this.state.color === 'blue' ? 'red' : 'blue'
    })
  },

  render() {
    const { children, secondHeading } = this.props
    const { color } = this.state

    const style = {
      backgroundColor: color
    }

    return (
      <div className="awesome-component" style={style}>
        <h1 className="component-heading">This is an awesome component</h1>

        {secondHeading &&
          <h2>
            {secondHeading}
          </h2>
        }

        <button onClick={this.handleButtonClick}>Click me!</button>

        {children}
      </div>
    )
  }
})

module.exports = React.createClass({
  render() {
    require('./test')
    return (
      <div>
        <div className="panel-heading">
          <h1 className="exercise-five">05 - React</h1>
        </div>
        <div className="panel-body">
          <p>For testing react components we use Enzyme, an open source module from airbnb.</p>
          <p>You can use this to render a component which allows you to run tets against it. For example you may want to render the compenent with certain props and assert that the markup looks as expected.</p>
          <p>You can also use Enzyme to simulate events on your component such as link clicks which you can then use to assert that the outcome was as expected.</p>

          <Component secondHeading="Such wow">
            <p>This is the best!</p>
          </Component>
        </div>
      </div>
    )
  }
})

