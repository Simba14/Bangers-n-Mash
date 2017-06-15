import React from 'react';
import Header from '../src/components/Header';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';

test('correctly renders the Header component', () => {
  const tree = renderer.create(
    <Header />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

function setup() {
  const enzymeWrapper = mount(<Header {...'Boiler Room Picks'}/>)

  return {
    enzymeWrapper
  }
}

test('renders a h1', () => {
  const { enzymeWrapper } = setup()

  expect(enzymeWrapper.find('h1').text()).toBe('');
});
