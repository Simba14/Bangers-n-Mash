import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import { shallow } from 'enzyme';
import Header from '../src/components/header';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders one Text component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Header).length).toBe(1);
});
