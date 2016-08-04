const React = require('react');
const shallow = require('enzyme').shallow;
const mount = require('enzyme').mount;
const expect = require('chai')
  .use(require('dirty-chai'))
  .use(require('sinon-chai'))
  .expect;

const Component = require('./component');

let component;

describe('props', () => {
  context('with a secondHeading prop', () => {
    before(() => {
      component = shallow(<Component secondHeading="Much awesome" />);
    });

    it('should render an h2 using the prop string', () => {
      expect(component.find('h2')).to.have.length(1);
      expect(component.find('h2').text()).to.equal('Much awesome');
    });
  });

  context('without a secondHeading prop', () => {
    before(() => {
      component = shallow(<Component />);
    });

    it('should not render an h2', () => {
      expect(component.find('h2')).to.have.length(0);
    });
  });

  context('with children passed in', () => {
    before(() => {
      component = shallow(<Component><p>Such component</p></Component>);
    });

    it('should render the children', () => {
      expect(component.contains(<p>Such component</p>)).to.be.true();
    });
  });
});


describe('state', () => {
  before(() => {
    component = mount(<Component />);
  });

  context('with a blue color in state', () => {
    before(() => {
      component.setState({
        color: 'blue'
      });
    });

    it('should render a blue component', () => {
      expect(
        component.find('div.awesome-component').node.attributes.style.value
      )
      .to.equal('background-color: blue;');
    });
  });

  context('with a red color in state', () => {
    before(() => {
      component.setState({
        color: 'red'
      });
    });

    it('should render a red component', () => {
      expect(
        component.find('div.awesome-component').node.attributes.style.value
      )
      .to.equal('background-color: red;');
    });
  });
});


describe('button click', () => {
  before(() => {
    component = shallow(<Component />);
  });

  context('when the current color is blue', () => {
    before(() => {
      component.setState({
        color: 'blue'
      });
      component.find('button').simulate('click');
    });

    it('should set the color to red', () => {
      expect(component.state().color).to.equal('red');
    });
  });

  context('when the current color is red', () => {
    before(() => {
      component.setState({
        color: 'red'
      });
      component.find('button').simulate('click');
    });

    it('should set the color to blue', () => {
      expect(component.state().color).to.equal('blue');
    });
  });
});
