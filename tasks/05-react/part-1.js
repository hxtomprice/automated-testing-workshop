/*******************************************************************************
 * React
 * 
 * Test that the props behave as expected with the example component
 *   - Ensure that the secondHeading prop renders an h2 with the correct text
 *   - Ensure that the children prop correctly renders any children passed in
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


describe('props', () => {
  context('with a secondHeading prop', () => {
    it('should render an h2 using the prop string', () => {

    });
  });

  context('without a secondHeading prop', () => {
    it('should not render an h2', () => {

    });
  });

  context('with children passed in', () => {
    it('should render the children', () => {

    });
  });
});
