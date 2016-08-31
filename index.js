'use strict';

const React = require('react');
const ReactDom = require('react-dom');
const { Router, Route, Link, browserHistory } = require('react-router');

const Component = require('./tasks/05-react/component');
const NightwatchDemo = require('./components/nightwatch-demo');

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Automated Testing Workshop</h1>
        <ul className="nav row">
          <li className="col-xs-6 col-sm-2"><a className="btn" href="./one">One</a></li>
          <li className="col-xs-6 col-sm-2"><a className="btn" href="./two">Two</a></li>
          <li className="col-xs-6 col-sm-2"><a className="btn" href="./three">Three</a></li>
          <li className="col-xs-6 col-sm-2"><a className="btn" href="./four">Four</a></li>
          <li className="col-xs-6 col-sm-2"><a className="btn" href="./five">Five</a></li>
          <li className="col-xs-6 col-sm-2"><a className="btn" href="./six">Six</a></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});


const One = React.createClass({
  render() {
    require('./tasks/01-intro-to-assertions/test');
    return (
      <h2 className="exercise-one">01 - Introduction to Assertions</h2>
    );
  }
});

const Two = React.createClass({
  render() {
    require('./tasks/02-asynchronous-code/test');
    return (
      <h2 className="exercise-two">02 - Asynchronous Code</h2>
    );
  }
});

const Three = React.createClass({
  render() {
    require('./tasks/03-spies/test');
    return (
      <h2 className="exercise-three">03 - Spies</h2>
    );
  }
});

const Four = React.createClass({
  render() {
    require('./tasks/04-stubs/test');
    return (
      <h2 className="exercise-four">04 - Stubs</h2>
    );
  }
});

const Five = React.createClass({
  render() {
    require('./tasks/05-react/test');
    return (
      <div>
        <h2 className="exercise-five">05 - React</h2>
        <Component secondHeading="Such wow">
          <p>This is the best!</p>
        </Component>
      </div>
    );
  }
});

const Six = React.createClass({
  render() {
    return (
      <div>
        <h2 className="exercise-six">06 - Nightwatch</h2>
        <NightwatchDemo />
      </div>
    );
  }
});

const Seven = React.createClass({
  render() {
    require('./tasks/07-testing-practices/test');
    return (
      <h2 className="exercise-seven">07 - Testing best practices</h2>
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
      <Route path="six" component={Six}/>
      <Route path="seven" component={Seven}/>
    </Route>
  </Router>
), document.getElementById('root'));
