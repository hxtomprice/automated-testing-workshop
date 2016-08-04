'use strict';

const React = require('react');

/*
 * An awesome component which renders a header and a button which toggles the
 * background color between red and blue
 * This accepts optional props of secondHeading and children
 */
module.exports = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    secondHeading: React.PropTypes.string
  },

  getInitialState() {
    return {
      color: 'blue'
    };
  },

 /*
  * When the button is clicked we toggle the background color between red and
  * blue by changing state
  */
  handleButtonClick() {
    this.setState({
      color: this.state.color === 'blue' ? 'red' : 'blue'
    });
  },

  render() {
    const { children, secondHeading } = this.props;
    const { color } = this.state;

    const style = {
      backgroundColor: color
    };

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
    );
  }
});
