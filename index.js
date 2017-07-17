const React = require('react')
const ReactDom = require('react-dom')
const { Router, Route, Link, browserHistory } = require('react-router')

const Exercise1 = require('./tasks/01-intro-to-assertions/component')
const Exercise2 = require('./tasks/02-asynchronous-code/component')
const Exercise3 = require('./tasks/03-spies/component')
const Exercise4 = require('./tasks/04-stubs/component')
const Exercise5 = require('./tasks/05-react/component')
const Exercise6 = require('./tasks/06-testing-practices/component')

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="one" component={Exercise1} />
      <Route path="two" component={Exercise2}/>
      <Route path="three" component={Exercise3}/>
      <Route path="four" component={Exercise4}/>
      <Route path="five" component={Exercise5}/>
      <Route path="six" component={Exercise6}/>
    </Route>
  </Router>
), document.getElementById('root'))
