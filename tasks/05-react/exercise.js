const React = require('react');
const shallow = require('enzyme').shallow;
const mount = require('enzyme').mount;
const expect = require('chai')
  .use(require('dirty-chai'))
  .use(require('sinon-chai'))
  .expect;

const Component = require('./component.jsx');

/*******************************************************************************
 * React
 *
 * -- Part 1
 * Test that the props behave as expected with the example component
 *   - Ensure that the secondHeading prop renders an h2 with the correct text
 *   - Ensure that the children prop correctly renders any children passed in
 *
 * -- Documentation
 * https://github.com/airbnb/enzyme
 * 
 ******************************************************************************/

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


/*******************************************************************************
 * -- Part 2
 * Test that the state of the component works as expected
 * The state is used to set the background color of the component
 ******************************************************************************/

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


/*******************************************************************************
 * -- Part 3
 * Test that when the button on the component is clicked, it manipulates the
 * state as expected
 ******************************************************************************/

describe('button click', () => {
  it('should toggle the color state', () => {

  });
});

