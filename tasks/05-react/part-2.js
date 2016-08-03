/*******************************************************************************
 * React
 * 
 * Test that the state of the component works as expected
 * The state is used to set the background color of the component
 *
 * Remember to restore your stub after each test
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


describe('state', () => {
  context('with a blue color in state', () => {
    it('should render a blue component', () => {

    });
  });

  context('with a red color in state', () => {
    it('should render a red component', () => {

    });
  });
});
