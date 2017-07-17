'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tom.price/github/automated-testing-workshop/components/layout.js';


var Layout = function (_React$Component) {
  (0, _inherits3.default)(Layout, _React$Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'Automated Testing'), _react2.default.createElement('link', { type: 'text/css', rel: 'stylesheet', href: '/static/brand-hx.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement('script', { src: '/static/mocha.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })), _react2.default.createElement('nav', { className: 'navbar navbar-default navbar-static-top', role: 'navigation', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('div', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, this.props.children));
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;