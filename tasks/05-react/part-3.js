/*******************************************************************************
 * React
 * 
 * Test that when the button on the component is clicked, it manipulates the
 * state as expected
 *
 * -- Documentation
 * https://github.com/airbnb/enzyme
 * 
 ******************************************************************************/

const React = require('react');
const shallow = require('enzyme').shallow;
const mount = require('enzyme').mount;
const expect = require('chai')
  .use(require('dirty-chai'))
  .use(require('sinon-chai'))
  .expect;

const Component = require('./component.jsx');


describe('button click', () => {
  it('should toggle the color state', () => {

  });
});
