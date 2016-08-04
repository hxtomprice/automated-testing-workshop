'use strict';

const React = require('react');
const ReactDom = require('react-dom');
const { Router, Route, Link, browserHistory } = require('react-router');

const Component = require('./05-react/component');

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Automated Testing Workshop</h1>
        <ul className="nav">
          <li><a href="./one">One</a></li>
          <li><a href="./two">Two</a></li>
          <li><a href="./three">Three</a></li>
          <li><a href="./four">Four</a></li>
          <li><a href="./five">Five</a></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});


const One = React.createClass({
  render() {
    require('./01-intro-to-assertions/test');
    return (
      <h2>01 - Introduction to Assertions</h2>
    );
  }
});

const Two = React.createClass({
  render() {
    require('./02-asynchronous-code/test');
    return (
      <h2>03 - Asynchronous Code</h2>
    );
  }
});

const Three = React.createClass({
  render() {
    require('./03-spies/test');
    return (
      <h2>03 - Spies</h2>
    );
  }
});

const Four = React.createClass({
  render() {
    require('./04-stubs/test');
    return (
      <h2>04 - Stubs</h2>
    );
  }
});

const Five = React.createClass({
  render() {
    require('./05-react/test');
    return (
      <div>
        <h2>05 - React</h2>
        <Component secondHeading="Such wow">
          <p>This is the best!</p>
        </Component>
      </div>
    );
  }
});


ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="one" component={One} />
      <Route path="two" component={Two}/>
      <Route path="three" component={Three}/>
      <Route path="four" component={Four}/>
      <Route path="five" component={Five}/>
    </Route>
  </Router>
), document.getElementById('root'));
